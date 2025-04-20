import { Injectable } from '@nestjs/common';
import * as googleTrends from 'google-trends-api';

@Injectable()
export class GoogleTrendsService {
  async compareTrends(keywords: string[]): Promise<any> {
    try {
      const results = await googleTrends.interestOverTime({
        keyword: keywords,
        startTime: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 روز گذشته
      });
      return JSON.parse(results);
    } catch (error) {
      throw new Error('Failed to fetch Google Trends data');
    }
  }
}
