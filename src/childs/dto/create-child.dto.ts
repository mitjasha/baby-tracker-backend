import { EGender } from '../child.model';

export class CreateCheldDto {
  name: string;
  gender: EGender;
  birth: string;
  photo: string;
}
