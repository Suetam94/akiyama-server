import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [SubjectsService, PrismaService],
  controllers: [SubjectsController],
})
export class SubjectsModule {}
