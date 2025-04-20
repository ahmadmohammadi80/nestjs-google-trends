import { Module } from '@nestjs/common';
import { GoogleTrendsService } from './google-trends.service';

@Module({
  providers: [GoogleTrendsService],
  exports: [GoogleTrendsService],
})
export class GoogleTrendsModule {}
