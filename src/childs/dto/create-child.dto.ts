import { EGender } from '../child.model';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class CreateCheldDto {
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
