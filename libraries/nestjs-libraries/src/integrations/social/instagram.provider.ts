import {
  AnalyticsData,
  AuthTokenDetails,
  PostDetails,
  PostResponse,
  SocialProvider,
} from '@gitroom/nestjs-libraries/integrations/social/social.integrations.interface';
import { makeId } from '@gitroom/nestjs-libraries/services/make.is';
import { timer } from '@gitroom/helpers/utils/timer';
import dayjs from 'dayjs';
import { SocialAbstract } from '@gitroom/nestjs-libraries/integrations/social.abstract';
import { InstagramDto } from '@gitroom/nestjs-libraries/dtos/posts/providers-settings/instagram.dto';
import { Integration } from '@prisma/client';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import axios from 'axios';
import { basename, extname } from 'path';
import { UploadFactory } from '@gitroom/nestjs-libraries/upload/upload.factory';
import { tmpdir } from 'os';
import { writeFile, unlink, readFile } from 'fs/promises';
import { join } from 'path';

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

function getIGFileNameFromUrl(url: string): string {
  const base = basename(url);
  const ext = extname(base);
  const name = base.replace(ext, '');
  return `${name}-ig-publica-xxxxy${ext}`;
}

export async function urlExists(url: string): Promise<boolean> {
  try {
    await axios.head(url);
    return true;
  } catch (err: any) {
    if (err.response && err.response.status === 404) return false;
    return false;
  }
}

async function convertirYSubirVideoIGBuffer(originalUrl: string, mimetype: string): Promise<string> {
  // 1. Construir la URL esperada del archivo -ig
  const igFileName = getIGFileNameFromUrl(originalUrl);
  const igUrl = originalUrl.replace(basename(originalUrl), igFileName);

  console.log('[IG-VIDEO] URL original:', originalUrl);
  console.log('[IG-VIDEO] URL IG esperada:', igUrl);

  // 2. Validar si ya existe
  if (await urlExists(igUrl)) {
    console.log('[IG-VIDEO] Ya existe versión IG, usando:', igUrl);
    return igUrl;
  }

  // 3. Descargar el video original como buffer
  const response = await axios.get(originalUrl, { responseType: 'arraybuffer' });
  console.log('[IG-VIDEO] Status descarga:', response.status);
  console.log('[IG-VIDEO] Content-Type:', response.headers['content-type']);

  if (response.status !== 200) {
    throw new Error(`[IG-VIDEO] No se pudo descargar el video: status ${response.status}`);
  }
  if (!response.headers['content-type'] || !response.headers['content-type'].startsWith('video/')) {
    throw new Error(`[IG-VIDEO] El archivo no es un video: content-type ${response.headers['content-type']}`);
  }

  // 4. Escribir el buffer a un archivo temporal
  const tempInputPath = join(tmpdir(), `${makeId(10)}-input.mp4`);
  const tempOutputPath = join(tmpdir(), `${makeId(10)}-output.mp4`);
  await writeFile(tempInputPath, Buffer.from(response.data));

  // 5. Convertir usando ffmpeg (archivo input, archivo output)
  await new Promise((resolve, reject) => {
    ffmpeg(tempInputPath)
      .outputOptions([
        '-vf',
        'scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920',
        '-c:v',
        'libx264',
        '-profile:v',
        'high',
        '-level',
        '4.0',
        '-pix_fmt',
        'yuv420p',
        '-r',
        '30',
        '-crf', '18',
        '-c:a',
        'aac',
        '-b:a',
        '128k',
        '-ar',
        '44100',
        '-movflags',
        '+faststart'
      ])
      .format('mp4')
      .on('end', resolve)
      .on('error', (err) => {
        console.error('[IG-VIDEO] Error en ffmpeg:', err);
        reject(err);
      })
      .save(tempOutputPath);
  });

  // 6. Leer el archivo convertido a buffer
  const buffer = await readFile(tempOutputPath);

  // 7. Subir el buffer usando UploadFactory con el nombre correcto
  const storage = UploadFactory.createStorage();
  const file: Express.Multer.File = {
    fieldname: 'file',
    originalname: igFileName,
    encoding: '7bit',
    mimetype: mimetype || 'video/mp4',
    size: buffer.length,
    buffer,
    stream: undefined,
    destination: '',
    filename: igFileName,
    path: '',
  };
  const uploaded = await storage.uploadFile(file);

  // 8. Borrar archivos temporales
  await unlink(tempInputPath).catch(() => {});
  await unlink(tempOutputPath).catch(() => {});

  // 9. Retornar la URL/path del archivo subido
  return uploaded.path;
}

export class InstagramProvider
  extends SocialAbstract
  implements SocialProvider
{
  identifier = 'instagram';
  name = 'Instagram\n(Facebook Business)';
  isBetweenSteps = true;
  toolTip = 'Instagram must be business and connected to a Facebook page';
  scopes = [
    'instagram_basic',
    'pages_show_list',
    'pages_read_engagement',
    'business_management',
    'instagram_content_publish',
    'instagram_manage_comments',
    'instagram_manage_insights',
  ];

  async refreshToken(refresh_token: string): Promise<AuthTokenDetails> {
    return {
      refreshToken: '',
      expiresIn: 0,
      accessToken: '',
      id: '',
      name: '',
      picture: '',
      username: '',
    };
  }

  async reConnect(
    id: string,
    requiredId: string,
    accessToken: string
  ): Promise<AuthTokenDetails> {
    const findPage = (await this.pages(accessToken)).find(
      (p) => p.id === requiredId
    );

    const information = await this.fetchPageInformation(accessToken, {
      id: requiredId,
      pageId: findPage?.pageId!,
    });

    return {
      id: information.id,
      name: information.name,
      accessToken: information.access_token,
      refreshToken: information.access_token,
      expiresIn: dayjs().add(59, 'days').unix() - dayjs().unix(),
      picture: information.picture,
      username: information.username,
    };
  }

  async generateAuthUrl() {
    const state = makeId(6);
    return {
      url:
        'https://www.facebook.com/v20.0/dialog/oauth' +
        `?client_id=${process.env.FACEBOOK_APP_ID}` +
        `&redirect_uri=${encodeURIComponent(
          `${process.env.FRONTEND_URL}/integrations/social/instagram`
        )}` +
        `&state=${state}` +
        `&scope=${encodeURIComponent(this.scopes.join(','))}`,
      codeVerifier: makeId(10),
      state,
    };
  }

  async authenticate(params: {
    code: string;
    codeVerifier: string;
    refresh: string;
  }) {
    const getAccessToken = await (
      await this.fetch(
        'https://graph.facebook.com/v20.0/oauth/access_token' +
          `?client_id=${process.env.FACEBOOK_APP_ID}` +
          `&redirect_uri=${encodeURIComponent(
            `${process.env.FRONTEND_URL}/integrations/social/instagram${
              params.refresh ? `?refresh=${params.refresh}` : ''
            }`
          )}` +
          `&client_secret=${process.env.FACEBOOK_APP_SECRET}` +
          `&code=${params.code}`
      )
    ).json();

    const { access_token, expires_in, ...all } = await (
      await this.fetch(
        'https://graph.facebook.com/v20.0/oauth/access_token' +
          '?grant_type=fb_exchange_token' +
          `&client_id=${process.env.FACEBOOK_APP_ID}` +
          `&client_secret=${process.env.FACEBOOK_APP_SECRET}` +
          `&fb_exchange_token=${getAccessToken.access_token}`
      )
    ).json();

    const { data } = await (
      await this.fetch(
        `https://graph.facebook.com/v20.0/me/permissions?access_token=${access_token}`
      )
    ).json();

    const permissions = data
      .filter((d: any) => d.status === 'granted')
      .map((p: any) => p.permission);
    this.checkScopes(this.scopes, permissions);

    const {
      id,
      name,
      picture: {
        data: { url },
      },
    } = await (
      await this.fetch(
        `https://graph.facebook.com/v20.0/me?fields=id,name,picture&access_token=${access_token}`
      )
    ).json();

    return {
      id,
      name,
      accessToken: access_token,
      refreshToken: access_token,
      expiresIn: dayjs().add(59, 'days').unix() - dayjs().unix(),
      picture: url,
      username: '',
    };
  }

  async pages(accessToken: string) {
    const { data } = await (
      await this.fetch(
        `https://graph.facebook.com/v20.0/me/accounts?fields=id,instagram_business_account,username,name,picture.type(large)&access_token=${accessToken}&limit=500`
      )
    ).json();

    const onlyConnectedAccounts = await Promise.all(
      data
        .filter((f: any) => f.instagram_business_account)
        .map(async (p: any) => {
          return {
            pageId: p.id,
            ...(await (
              await this.fetch(
                `https://graph.facebook.com/v20.0/${p.instagram_business_account.id}?fields=name,profile_picture_url&access_token=${accessToken}&limit=500`
              )
            ).json()),
            id: p.instagram_business_account.id,
          };
        })
    );

    return onlyConnectedAccounts.map((p: any) => ({
      pageId: p.pageId,
      id: p.id,
      name: p.name,
      picture: { data: { url: p.profile_picture_url } },
    }));
  }

  async fetchPageInformation(
    accessToken: string,
    data: { pageId: string; id: string }
  ) {
    const { access_token, ...all } = await (
      await this.fetch(
        `https://graph.facebook.com/v20.0/${data.pageId}?fields=access_token,name,picture.type(large)&access_token=${accessToken}`
      )
    ).json();

    const { id, name, profile_picture_url, username } = await (
      await this.fetch(
        `https://graph.facebook.com/v20.0/${data.id}?fields=username,name,profile_picture_url&access_token=${accessToken}`
      )
    ).json();

    console.log(id, name, profile_picture_url, username);
    return {
      id,
      name,
      picture: profile_picture_url,
      access_token,
      username,
    };
  }

  async post(
    id: string,
    accessToken: string,
    postDetails: PostDetails<InstagramDto>[],
    integration: Integration,
    type = 'graph.facebook.com'
  ): Promise<PostResponse[]> {
    const [firstPost, ...theRest] = postDetails;

    // Convertir y reemplazar path de videos a versión -ig
    if (firstPost.media && Array.isArray(firstPost.media)) {
      for (const media of firstPost.media) {
        if (media.path.indexOf('.mp4') > -1 && !media.path.includes('-ig-publica-xxxxy.mp4')) {
          media.path = await convertirYSubirVideoIGBuffer(media.path, 'video/mp4');
        }
      }
    }

    console.log('in progress');
    const isStory = firstPost.settings.post_type === 'story';
    const medias = await Promise.all(
      firstPost?.media?.map(async (m) => {
        const caption =
          firstPost.media?.length === 1
            ? `&caption=${encodeURIComponent(firstPost.message)}`
            : ``;
        const isCarousel =
          (firstPost?.media?.length || 0) > 1 ? `&is_carousel_item=true` : ``;
        const mediaType =
          m.path.indexOf('.mp4') > -1
            ? firstPost?.media?.length === 1
              ? isStory
                ? `video_url=${m.path}&media_type=STORIES`
                : `video_url=${m.path}&media_type=REELS`
              : isStory
              ? `video_url=${m.path}&media_type=STORIES`
              : `video_url=${m.path}&media_type=VIDEO`
            : isStory
            ? `image_url=${m.path}&media_type=STORIES`
            : `image_url=${m.path}`;
        console.log('in progress1');

        const collaborators =
          firstPost?.settings?.collaborators?.length && !isStory
            ? `&collaborators=${JSON.stringify(
                firstPost?.settings?.collaborators.map((p) => p.label)
              )}`
            : ``;

        console.log(collaborators);
        const { id: photoId } = await (
          await this.fetch(
            `https://${type}/v20.0/${id}/media?${mediaType}${isCarousel}${collaborators}&access_token=${accessToken}${caption}`,
            {
              method: 'POST',
            }
          )
        ).json();
        console.log('in progress2');

        let status = 'IN_PROGRESS';
        while (status === 'IN_PROGRESS') {
          const { status_code } = await (
            await this.fetch(
              `https://${type}/v20.0/${photoId}?access_token=${accessToken}&fields=status_code`
            )
          ).json();
          await timer(3000);
          status = status_code;
        }
        console.log('in progress3');

        return photoId;
      }) || []
    );

    const arr = [];

    let containerIdGlobal = '';
    let linkGlobal = '';
    if (medias.length === 1) {
      const { id: mediaId } = await (
        await this.fetch(
          `https://${type}/v20.0/${id}/media_publish?creation_id=${medias[0]}&access_token=${accessToken}&field=id`,
          {
            method: 'POST',
          }
        )
      ).json();

      containerIdGlobal = mediaId;

      const { permalink } = await (
        await this.fetch(
          `https://${type}/v20.0/${mediaId}?fields=permalink&access_token=${accessToken}`
        )
      ).json();

      arr.push({
        id: firstPost.id,
        postId: mediaId,
        releaseURL: permalink,
        status: 'success',
      });

      linkGlobal = permalink;
    } else {
      const { id: containerId, ...all3 } = await (
        await this.fetch(
          `https://${type}/v20.0/${id}/media?caption=${encodeURIComponent(
            firstPost?.message
          )}&media_type=CAROUSEL&children=${encodeURIComponent(
            medias.join(',')
          )}&access_token=${accessToken}`,
          {
            method: 'POST',
          }
        )
      ).json();

      let status = 'IN_PROGRESS';
      while (status === 'IN_PROGRESS') {
        const { status_code } = await (
          await this.fetch(
            `https://${type}/v20.0/${containerId}?fields=status_code&access_token=${accessToken}`
          )
        ).json();
        await timer(3000);
        status = status_code;
      }

      const { id: mediaId, ...all4 } = await (
        await this.fetch(
          `https://${type}/v20.0/${id}/media_publish?creation_id=${containerId}&access_token=${accessToken}&field=id`,
          {
            method: 'POST',
          }
        )
      ).json();

      containerIdGlobal = mediaId;

      const { permalink } = await (
        await this.fetch(
          `https://${type}/v20.0/${mediaId}?fields=permalink&access_token=${accessToken}`
        )
      ).json();

      arr.push({
        id: firstPost.id,
        postId: mediaId,
        releaseURL: permalink,
        status: 'success',
      });

      linkGlobal = permalink;
    }

    for (const post of theRest) {
      const { id: commentId } = await (
        await this.fetch(
          `https://${type}/v20.0/${containerIdGlobal}/comments?message=${encodeURIComponent(
            post.message
          )}&access_token=${accessToken}`,
          {
            method: 'POST',
          }
        )
      ).json();

      arr.push({
        id: firstPost.id,
        postId: commentId,
        releaseURL: linkGlobal,
        status: 'success',
      });
    }

    return arr;
  }

  async analytics(
    id: string,
    accessToken: string,
    date: number,
    type = 'graph.facebook.com'
  ): Promise<AnalyticsData[]> {
    const until = dayjs().endOf('day').unix();
    const since = dayjs().subtract(date, 'day').unix();

    const { data, ...all } = await (
      await this.fetch(
        `https://${type}/v21.0/${id}/insights?metric=follower_count,reach&access_token=${accessToken}&period=day&since=${since}&until=${until}`
      )
    ).json();

    const { data: data2, ...all2 } = await (
      await this.fetch(
        `https://${type}/v21.0/${id}/insights?metric_type=total_value&metric=likes,views,comments,shares,saves,replies&access_token=${accessToken}&period=day&since=${since}&until=${until}`
      )
    ).json();
    const analytics = [];

    analytics.push(
      ...(data?.map((d: any) => ({
        label: d.title,
        percentageChange: 5,
        data: d.values.map((v: any) => ({
          total: v.value,
          date: dayjs(v.end_time).format('YYYY-MM-DD'),
        })),
      })) || [])
    );

    analytics.push(
      ...data2.map((d: any) => ({
        label: d.title,
        percentageChange: 5,
        data: [
          {
            total: d.total_value.value,
            date: dayjs().format('YYYY-MM-DD'),
          },
          {
            total: d.total_value.value,
            date: dayjs().add(1, 'day').format('YYYY-MM-DD'),
          },
        ],
      }))
    );

    return analytics;
  }

  music(accessToken: string, data: { q: string }) {
    return this.fetch(
      `https://graph.facebook.com/v20.0/music/search?q=${encodeURIComponent(
        data.q
      )}&access_token=${accessToken}`
    );
  }
}
