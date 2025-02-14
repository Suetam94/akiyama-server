import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createStudent(data: CreateStudentDto) {
    return this.prismaService.student.create({ data });
  }

  async getAllStudents() {
    return this.prismaService.student.findMany({
      include: { subjects: true },
    });
  }

  async getStudentById(id: number) {
    const student = await this.prismaService.student.findUnique({
      where: { id },
      include: { subjects: true },
    });

    if (!student)
      throw new NotFoundException(`Student with ID ${id} not found`);

    return student;
  }

  async updateStudent(id: number, data: UpdateStudentDto) {
    await this.getStudentById(id);

    return this.prismaService.student.update({
      where: { id },
      data: data,
    });
  }

  async deleteStudent(id: number) {
    await this.getStudentById(id);

    return this.prismaService.student.delete({ where: { id } });
  }
}
