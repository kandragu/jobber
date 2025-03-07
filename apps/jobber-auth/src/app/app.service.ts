import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaSerice: PrismaService) {}

  getData(): { message: string } {
    // this.prismaSerice.user.count();
    return { message: 'Hello API' };
  }
}
