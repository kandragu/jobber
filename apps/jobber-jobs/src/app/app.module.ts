import { DiscoveryModule } from '@golevelup/nestjs-discovery';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JobsModule } from './jobs/jobs.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    ConfigModule,
    DiscoveryModule,
    JobsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      // useGlobalPrefix: true,
      playground: {
        settings: {
          'request.credentials': 'include',
        },
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
