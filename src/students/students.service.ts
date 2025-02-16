import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllStudents() {
    try {
      return await this.prisma.student.findMany();
    } catch {
      throw new BadRequestException('Erro ao buscar os estudantes.');
    }
  }

  async getStudentById(id: number) {
    try {
      const student = await this.prisma.student.findUnique({
        where: { id },
      });

      if (!student)
        throw new NotFoundException(`Estudante com ID ${id} não encontrado.`);

      return student;
    } catch {
      throw new BadRequestException('Erro ao buscar estudante.');
    }
  }

  async createStudent(data: CreateStudentDto) {
    try {
      return await this.prisma.student.create({ data });
    } catch {
      throw new BadRequestException('Erro ao criar estudante.');
    }
  }

  async updateStudent(id: number, data: Partial<CreateStudentDto>) {
    try {
      await this.getStudentById(id);

      const updatedData = {
        ...data,
        age: data.age !== undefined ? Number(data.age) : undefined,
        grade: data.grade !== undefined ? Number(data.grade) : undefined,
      };

      return await this.prisma.student.update({
        where: { id },
        data: updatedData,
      });
    } catch {
      throw new BadRequestException('Erro ao atualizar estudante.');
    }
  }

  async deleteStudent(id: number) {
    try {
      await this.getStudentById(id);
      return await this.prisma.student.delete({ where: { id } });
    } catch {
      throw new BadRequestException('Erro ao excluir estudante.');
    }
  }
}
