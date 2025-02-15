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
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDTO } from './dto/update-subject.dto';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectService: SubjectsService) {}

  @Post()
  async createStudent(@Body() data: CreateSubjectDto) {
    return this.subjectService.createSubject(data);
  }

  @Get()
  async getAllStudents() {
    return this.subjectService.getAllSubjects();
  }

  @Get(':id')
  async getSubjectById(@Param('id', ParseIntPipe) id: number) {
    return this.subjectService.getSubjectById(id);
  }

  @Put(':id')
  async updateSubject(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateSubjectDTO,
  ) {
    return this.subjectService.updateSubject(id, data);
  }

  @Delete(':id')
  async deleteSubject(@Param('id', ParseIntPipe) id: number) {
    return this.subjectService.deleteSubject(id);
  }
}
