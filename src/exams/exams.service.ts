import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateExamDto } from './dto/create-exam.dto';

@Injectable()
export class ExamsService {
  constructor(private readonly prisma: PrismaService) {}

  async createExam(data: CreateExamDto) {
    try {
      const student = await this.prisma.student.findUnique({
        where: { id: data.studentId },
      });

      if (!student)
        throw new NotFoundException(
          `Estudante com ID ${data.studentId} não encontrado.`,
        );

      const subject = await this.prisma.subject.findUnique({
        where: { id: data.subjectId },
      });

      if (!subject)
        throw new NotFoundException(
          `Matéria com ID ${data.subjectId} não encontrada.`,
        );

      return this.prisma.exam.create({ data });
    } catch {
      throw new BadRequestException('Erro ao criar prova.');
    }
  }

  async getAllExams() {
    try {
      return this.prisma.exam.findMany({
        include: { student: true, subject: true },
      });
    } catch {
      throw new BadRequestException('Erro ao buscar provas.');
    }
  }

  async getExamById(id: number) {
    try {
      const exam = await this.prisma.exam.findUnique({
        where: { id },
        include: { student: true, subject: true },
      });

      if (!exam)
        throw new NotFoundException(`Prova com ID ${id} não encontrada.`);

      return exam;
    } catch {
      throw new BadRequestException('Erro ao buscar prova.');
    }
  }

  async updateExam(id: number, data: Partial<CreateExamDto>) {
    try {
      await this.getExamById(id);

      const updatedData = {
        ...data,
        score: data.score !== undefined ? Number(data.score) : undefined,
        studentId:
          data.studentId !== undefined ? Number(data.studentId) : undefined,
        subjectId:
          data.subjectId !== undefined ? Number(data.subjectId) : undefined,
      };

      return this.prisma.exam.update({
        where: { id },
        data: updatedData,
      });
    } catch {
      throw new BadRequestException('Erro ao atualizar prova.');
    }
  }

  async deleteExam(id: number) {
    try {
      await this.getExamById(id);
      return this.prisma.exam.delete({ where: { id } });
    } catch {
      throw new BadRequestException('Erro ao excluir prova.');
    }
  }
}
