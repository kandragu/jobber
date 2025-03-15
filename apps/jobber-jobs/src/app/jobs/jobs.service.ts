import {
  DiscoveredClassWithMeta,
  DiscoveryService,
} from '@golevelup/nestjs-discovery';
import { BadRequestException, Injectable, OnModuleInit } from '@nestjs/common';
import { JobMetadata } from '../interfaces/job-metadata.interface';
import { JOB_METADATA_KEY } from '../decorators/jobs.decorators';
import { AbstractJob } from './abstract.job';

@Injectable()
export class JobsService implements OnModuleInit {
  constructor(private readonly discoveryService: DiscoveryService) {}
  private jobs: DiscoveredClassWithMeta<JobMetadata>[] = [];

  async onModuleInit() {
    this.jobs = await this.discoveryService.providersWithMetaAtKey<JobMetadata>(
      JOB_METADATA_KEY
    );

    // console.log('providers', provider);
  }
  async getJobs() {
    return this.jobs.map((job) => job.meta);
  }

  async executeJob(name: string, data: any) {
    const job = this.jobs.find((job) => job.meta.name == name);
    if (!job) {
      throw new BadRequestException(`Job ${name} does not exists`);
    }
    (job.discoveredClass.instance as AbstractJob).execute();
    return job.meta;
  }
}
