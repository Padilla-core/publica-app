import { BadRequestException } from '@nestjs/common';
import { QueueService } from '@gitroom/nestjs-libraries/services/queue.services';
import { Integration, Post } from '@prisma/client';

export abstract class MarketplaceAbstract {
    public readonly name: string
    public readonly identifier: string
    public readonly postListUrl: string

    private readonly _queueService = new QueueService()
    private readonly _authenticationQueueUrl = process.env.AWS_AUTHENTICATION_QUEUE_URL ?? ''
    private readonly _postQueueUrl = process.env.AWS_POST_QUEUE_URL ?? ''

    public validateEmail(email: string): boolean {
        // RFC 5322 compliant email regex
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        if (!email || typeof email !== 'string') {
            return false;
        }

        if (email.length > 254) {
            return false;
        }

        return emailRegex.test(email);
    }

    public async sendAuthentication(orgId: string, integrationId: string, username: string, password: string) {
        await this._queueService.sendMessage(
            this._authenticationQueueUrl,
            {
                orgId,
                integrationId,
                application: this.identifier,
                authentication: {
                    username,
                    password,
                }
            }
        )
    }

    public async authenticate(
        orgId: string,
        integrationId: string,
        username: string,
        password: string
    ): Promise<void> {
        if (!this.validateEmail(username)) {
            throw new BadRequestException('Invalid email address format');
        }

        await this.sendAuthentication(orgId, integrationId, username, password)
    }

    public async post(integration: Integration, post: Post): Promise<void> {
        const { password, cookies } = JSON.parse(integration.additionalSettings ?? "{}");

        const { settings, content, image } = post

        await this._queueService.sendMessage(this._postQueueUrl, {
            action: 'publish',
            orgId: integration.organizationId,
            payload: [
                {
                    application: integration.providerIdentifier,
                    integrationId: integration.id,
                    post: {
                        id: post.id,
                        description: content,
                        images: JSON.parse(image || '[]').map((ig: any) => ig.path),
                        ...(JSON.parse(settings || '{}'))
                    },
                }
            ],
            authenticate: {
                cookies,
                password,
                userId: integration.internalId,
                username: integration.profile,
            }
        })
    }
}
