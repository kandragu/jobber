import { DiscoveryService } from '@golevelup/nestjs-discovery';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { JobMetadata } from '../interfaces/job-metadata.interface';
import { JOB_METADATA_KEY } from '../decorators/jobs.decorators';

@Injectable()
export class JobsService implements OnModuleInit {
  constructor(private readonly discoveryService: DiscoveryService) {}

  async onModuleInit() {
    const provider =
      await this.discoveryService.providersWithMetaAtKey<JobMetadata>(
        JOB_METADATA_KEY
      );

    console.log('providers', provider);
  }
}
