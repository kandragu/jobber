import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JobsService } from './jobs.service';
import { Job } from '../models/jobs.models';
import { ExecuteJobInput } from '../dto/execute-job.input';

@Resolver()
export class JobsResolver {
  constructor(private readonly jobsService: JobsService) {}

  @Query(() => [Job], { name: 'jobs' })
  async getJobs() {
    return this.jobsService.getJobs();
  }
  @Mutation(() => Job)
  async executeJob(@Args('executeJobInput') executeJobInput: ExecuteJobInput) {
    return this.jobsService.executeJob(
      executeJobInput.name,
      executeJobInput.data
    );
  }
}
