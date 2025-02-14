import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  async createStudent(@Body() data: CreateStudentDto) {
    return this.studentsService.createStudent(data);
  }

  @Get()
  async getAllStudents() {
    return this.studentsService.getAllStudents();
  }

  @Get(':id')
  async getStudentById(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.getStudentById(id);
  }

  @Put(':id')
  async updateStudent(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateStudentDto,
  ) {
    return this.studentsService.updateStudent(id, data);
  }

  @Delete(':id')
  async deleteStudent(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.deleteStudent(id);
  }
}
