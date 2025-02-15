import { IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class CreateExamDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(10)
  score: number;

  @IsNotEmpty()
  @IsNumber()
  studentId: number;

  @IsNotEmpty()
  @IsNumber()
  subjectId: number;
}
