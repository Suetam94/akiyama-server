import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateStudentDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  document: string;

  @IsOptional()
  @IsNumber()
  age: number;

  @IsOptional()
  @IsString()
  gender: string;

  @IsOptional()
  @IsNumber()
  grade: number;

  @IsOptional()
  @IsString()
  turn: string;
}
