import { IsDateString, IsEnum } from 'class-validator';
import { EGender } from '../child-gender.enum';

export class UpdateChildDto {
  name?: string;

  @IsEnum(EGender)
  gender?: EGender;

  @IsDateString()
  birth?: string;

  photo?: string;
}
