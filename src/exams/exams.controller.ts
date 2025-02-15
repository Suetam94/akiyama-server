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
import { ExamsService } from './exams.service';
import { CreateExamDto } from './dto/create-exam.dto';

@Controller('exams')
export class ExamsController {
  constructor(private readonly examsService: ExamsService) {}

  @Post()
  async createExam(@Body() data: CreateExamDto) {
    return this.examsService.createExam(data);
  }

  @Get()
  async getAllExams() {
    return this.examsService.getAllExams();
  }

  @Get(':id')
  async getExamById(@Param('id', ParseIntPipe) id: number) {
    return this.examsService.getExamById(id);
  }

  @Put(':id')
  async updateExam(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<CreateExamDto>,
  ) {
    return this.examsService.updateExam(id, data);
  }

  @Delete(':id')
  async deleteExam(@Param('id', ParseIntPipe) id: number) {
    return this.examsService.deleteExam(id);
  }
}
