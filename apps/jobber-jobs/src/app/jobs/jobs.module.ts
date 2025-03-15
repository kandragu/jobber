import { Module } from '@nestjs/common';
import { DiscoveryModule } from '@golevelup/nestjs-discovery';
import { FibonacciJob } from './fibonacci/fibonacci.job';
import { JobsService } from './jobs.service';
@Module({
  imports: [DiscoveryModule],
  controllers: [],
  providers: [FibonacciJob, JobsService],
})
export class JobsModule {}
