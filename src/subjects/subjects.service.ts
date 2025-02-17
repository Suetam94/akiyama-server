import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSubjectDto } from './dto/create-subject.dto';

@Injectable()
export class SubjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async createSubject(data: CreateSubjectDto) {
    try {
      return await this.prisma.subject.create({ data });
    } catch {
      throw new BadRequestException('Erro ao criar matéria.');
    }
  }

  async getAllSubjects() {
    try {
      return await this.prisma.subject.findMany();
    } catch {
      throw new BadRequestException('Erro ao buscar matérias.');
    }
  }

  async getSubjectById(id: number) {
    try {
      const subject = await this.prisma.subject.findUnique({
        where: { id },
        include: { exams: true },
      });

      if (!subject)
        throw new NotFoundException(`Matéria com ID ${id} não encontrada.`);

      return subject;
    } catch {
      throw new BadRequestException('Erro ao buscar matéria.');
    }
  }

  async updateSubject(id: number, data: Partial<CreateSubjectDto>) {
    try {
      await this.getSubjectById(id);

      const updatedData = {
        ...data,
        name: data.name ? String(data.name).trim() : undefined,
      };

      return await this.prisma.subject.update({
        where: { id },
        data: updatedData,
      });
    } catch {
      throw new BadRequestException('Erro ao atualizar matéria.');
    }
  }

  async deleteSubject(id: number) {
    try {
      await this.getSubjectById(id);
      return await this.prisma.subject.delete({ where: { id } });
    } catch {
      throw new BadRequestException('Erro ao excluir matéria.');
    }
  }
}
