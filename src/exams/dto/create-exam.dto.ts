import { IsNotEmpty, IsInt, IsNumber, Min, Max } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateExamDto {
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @Min(0)
  @Max(10)
  score: number;

  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  @IsInt()
  studentId: number;

  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  @IsInt()
  subjectId: number;
}
