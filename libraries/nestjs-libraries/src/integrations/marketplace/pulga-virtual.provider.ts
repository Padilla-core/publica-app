import { MarketplaceAbstract } from '@gitroom/nestjs-libraries/integrations/marketplace.abstract';
import { MarketplaceProvider } from '@gitroom/nestjs-libraries/integrations/marketplace/marketplace.integrations.interface';

export class PulgaVirtualProvider extends MarketplaceAbstract implements MarketplaceProvider {
    public override readonly name = 'Pulga Virtual';
    public override readonly identifier = 'pulga-virtual';
    public override readonly postListUrl = 'https://www.lapulga.com.do'
}
