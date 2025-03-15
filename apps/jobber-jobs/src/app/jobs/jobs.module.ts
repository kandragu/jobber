import { Module } from '@nestjs/common';
import { DiscoveryModule } from '@golevelup/nestjs-discovery';
import { FibonacciJob } from './fibonacci/fibonacci.job';
import { JobsService } from './jobs.service';
import { JobsResolver } from './jobs.resolver';
@Module({
  imports: [DiscoveryModule],
  controllers: [],
  providers: [FibonacciJob, JobsService, JobsResolver],
})
export class JobsModule {}
