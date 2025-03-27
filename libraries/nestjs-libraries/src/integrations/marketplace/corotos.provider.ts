import { MarketplaceAbstract } from '@gitroom/nestjs-libraries/integrations/marketplace.abstract';
import { MarketplaceProvider } from '@gitroom/nestjs-libraries/integrations/marketplace/marketplace.integrations.interface';

export class CorotosProvider extends MarketplaceAbstract implements MarketplaceProvider {
    public override readonly name = 'Corotos';
    public override readonly identifier = 'corotos';
}
