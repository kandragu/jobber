import { DiscoveryModule } from '@golevelup/nestjs-discovery';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [ConfigModule, DiscoveryModule, JobsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
