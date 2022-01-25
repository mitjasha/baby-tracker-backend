import { EGender } from '../child-gender.enum';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class CreateChildDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEnum(EGender)
  gender: EGender;

  @IsNotEmpty()
  birth: string;

  // @IsNotEmpty()
  photo: string;
}
