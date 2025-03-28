import { Body, Controller, Post } from '@nestjs/common';
import { IntegrationManager } from '@gitroom/nestjs-libraries/integrations/integration.manager';
import { IntegrationService } from '@gitroom/nestjs-libraries/database/prisma/integrations/integration.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Publica Endpoints')
@Controller('/publica')
export class PublicaController {
  constructor(
    private _integrationManager: IntegrationManager,
    private _integrationService: IntegrationService,
  ) { }

  @Post('/marketplace/authenticate')
  async authenticateMarketplaceIntegration(@Body() body: {
    orgId: string,
    integrationId: string,
    integration: string,
    status: string,
    internalId: string,
    cookies: unknown[],
    platformId: string,
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
        body.platformId,
      )
    } catch (error) {
      console.error('trying authenticate marketplace integration', body, error)
    }
  }
}