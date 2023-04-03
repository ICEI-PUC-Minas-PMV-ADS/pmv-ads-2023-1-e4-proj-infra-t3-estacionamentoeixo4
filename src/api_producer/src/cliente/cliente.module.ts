import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { PrismaService } from '@src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ClienteController],
  providers: [ClienteService, PrismaService],
})
export class ClienteModule {}
