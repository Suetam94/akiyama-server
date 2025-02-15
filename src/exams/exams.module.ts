import { Module } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { ExamsController } from './exams.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [ExamsService, PrismaService],
  controllers: [ExamsController],
})
export class ExamsModule {}
