import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDTO } from './dto/update-subject.dto';

@Injectable()
export class SubjectsService {
  constructor(private prismaService: PrismaService) {}

  async createSubject(data: CreateSubjectDto) {
    return this.prismaService.subject.create({ data });
  }

  async getAllSubjects() {
    return this.prismaService.subject.findMany();
  }

  async getSubjectById(id: number) {
    const subject = await this.prismaService.subject.findUnique({
      where: { id },
      include: { exams: true },
    });

    if (!subject) {
      throw new NotFoundException(`Subject with ID ${id} not found`);
    }

    return subject;
  }

  async updateSubject(id: number, data: UpdateSubjectDTO) {
    await this.getSubjectById(id);

    return this.prismaService.subject.update({
      where: { id },
      data: data,
    });
  }

  async deleteSubject(id: number) {
    await this.getSubjectById(id);
    return this.prismaService.subject.delete({ where: { id } });
  }
}
