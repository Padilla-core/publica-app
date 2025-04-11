import { Integration, Post } from "@prisma/client";

interface MarketplaceIntegrationsInterface { 
    authenticate(orgId: string,integrationId: string, username: string, password: string): Promise<void>
    post(integration: Integration, post: Post): Promise<void>
}

export interface MarketplaceProvider extends MarketplaceIntegrationsInterface { 
    identifier: string;
    name: string;
    postListUrl: string;
}
