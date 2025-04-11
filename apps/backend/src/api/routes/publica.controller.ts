import { Body, Controller, Post } from '@nestjs/common';
import { IntegrationManager } from '@gitroom/nestjs-libraries/integrations/integration.manager';
import { IntegrationService } from '@gitroom/nestjs-libraries/database/prisma/integrations/integration.service';
import { ApiTags } from '@nestjs/swagger';
import { PostsService } from '@gitroom/nestjs-libraries/database/prisma/posts/posts.service';
import { State } from '@prisma/client';

@ApiTags('Publica Endpoints')
@Controller('/publica')
export class PublicaController {
  constructor(
    private _integrationManager: IntegrationManager,
    private _integrationService: IntegrationService,
    private _postsService: PostsService,
  ) { }

  @Post('/marketplace/receive-post') 
  async receivePost(@Body() body: {
    orgId: string,
    integrationId: string,
    postId: string,
    status: State,
    releaseUrl: string,
    error: any,
  }) {
    try {
      await this._postsService.receiveMarketplacePost(
        body.orgId, 
        body.integrationId,
        body.postId,
        body.status,
        body.releaseUrl,
        body.error,
      )
    } catch (error) {
      console.error('error receiving post: ', error)
    }
  }

  @Post('/marketplace/authenticate')
  async authenticateMarketplaceIntegration(@Body() body: {
    orgId: string,
    integrationId: string,
    integration: string,
    status: string,
    internalId: string,
    cookies: unknown[],
    platformId: string,
    password: string,
  }) {
    try {
      if (
        !this._integrationManager
          .getAllowedMarketplacesIntegrations()
          .includes(body.integration)
      ) {
        console.error('authenticateMarketplaceIntegration: integration not allowed ' + body.integration);
        return;
      }

      const getIntegration = this._integrationManager.getMarketplaceIntegration(body.integration)

      await this._integrationService.authenticateMarketplaceIntegrarion(
        body.orgId,
        body.integrationId,
        getIntegration,
        body.status,
        body.internalId,
        body.cookies,
        body.password,
        body.platformId,
      )
    } catch (error) {
      console.error('trying authenticate marketplace integration', body, error)
    }
  }
}