import { EGender } from '../child-gender.enum';
import { IsDateString, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateChildDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEnum(EGender)
  gender: EGender;

  @IsNotEmpty()
  @IsDateString()
  birth: string;

  // @IsNotEmpty()
  photo: string;
}
