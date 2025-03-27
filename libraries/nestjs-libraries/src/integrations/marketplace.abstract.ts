import { BadRequestException } from '@nestjs/common';
import { QueueService } from '@gitroom/nestjs-libraries/services/queue.services';

export abstract class MarketplaceAbstract {
    public readonly name: string
    public readonly identifier: string

    private readonly queueService = new QueueService()
    private readonly authenticationQueueUrl = process.env.AWS_AUTHENTICATION_QUEUE_URL ?? ''

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
        await this.queueService.sendMessage(
            this.authenticationQueueUrl,
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
}
