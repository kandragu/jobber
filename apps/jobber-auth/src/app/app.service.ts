import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
// import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AppService {
  // constructor(private readonly prismaSerice: PrismaService) {}

  getData(): { message: string } {
    // const count = await this.prismaSerice.user.count();
    return { message: 'Hello API' };
  }
}
