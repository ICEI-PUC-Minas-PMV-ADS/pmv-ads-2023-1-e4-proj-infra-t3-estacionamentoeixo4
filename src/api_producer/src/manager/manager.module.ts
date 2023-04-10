import { Module } from '@nestjs/common';
import { ManagerService } from '../manager/services/manager.service';
import { ManagerController } from '../manager/controllers/manager.controller';
import { PrismaService } from '@src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ManagerController],
  providers: [ManagerService, PrismaService],
})
export class ManagerModule {}
