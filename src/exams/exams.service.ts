import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateExamDto } from './dto/create-exam.dto';

@Injectable()
export class ExamsService {
  constructor(private readonly prisma: PrismaService) {}

  async createExam(data: CreateExamDto) {
    const student = await this.prisma.student.findUnique({
      where: { id: data.studentId },
    });

    if (!student)
      throw new NotFoundException(
        `Student with ID ${data.studentId} not found`,
      );

    const subject = await this.prisma.subject.findUnique({
      where: { id: data.subjectId },
    });

    if (!subject)
      throw new NotFoundException(
        `Subject with ID ${data.subjectId} not found`,
      );

    return this.prisma.exam.create({ data });
  }

  async getAllExams() {
    return this.prisma.exam.findMany({
      include: { student: true, subject: true },
    });
  }

  async getExamById(id: number) {
    const exam = await this.prisma.exam.findUnique({
      where: { id },
      include: { student: true, subject: true },
    });

    if (!exam) throw new NotFoundException(`Exam with ID ${id} not found`);

    return exam;
  }

  async updateExam(id: number, data: Partial<CreateExamDto>) {
    await this.getExamById(id); // Verifica se a prova existe

    return this.prisma.exam.update({
      where: { id },
      data,
    });
  }

  async deleteExam(id: number) {
    await this.getExamById(id); // Verifica se a prova existe

    return this.prisma.exam.delete({ where: { id } });
  }
}
