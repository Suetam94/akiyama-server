import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { SubjectsModule } from './subjects/subjects.module';
import { ExamsModule } from './exams/exams.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [StudentsModule, SubjectsModule, ExamsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
