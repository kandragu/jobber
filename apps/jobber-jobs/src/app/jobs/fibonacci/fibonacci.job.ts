// import { FibonacciMessage, PulsarClient } from '@jobber/pulsar';
import { Job } from '../../decorators/jobs.decorators';
import { AbstractJob } from '../abstract.job';
import { Jobs } from '@jobber/nestjs';

@Job({
  name: Jobs.FIBONACCI,
  description: 'Generate a Fibonacci sequence and store it in the DB.',
})
export class FibonacciJob extends AbstractJob {
  //   protected messageClass = FibonacciMessage;
}
