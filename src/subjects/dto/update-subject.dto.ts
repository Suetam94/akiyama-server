import { IsString } from 'class-validator';

export class UpdateSubjectDTO {
  @IsString()
  name: string;
}
