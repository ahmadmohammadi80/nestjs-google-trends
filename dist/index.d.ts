declare class GoogleTrendsModule {
}

declare class GoogleTrendsService {
    compareTrends(keywords: string[]): Promise<any>;
}

export { GoogleTrendsModule, GoogleTrendsService };
