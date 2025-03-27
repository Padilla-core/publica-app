interface MarketplaceIntegrationsInterface { 
    authenticate(orgId: string,integrationId: string, username: string, password: string): Promise<void>
}

export interface MarketplaceProvider extends MarketplaceIntegrationsInterface { 
    identifier: string;
    name: string;
}
