import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma-clients/auth';

@Injectable()
export class PrismaService extends PrismaClient {}
