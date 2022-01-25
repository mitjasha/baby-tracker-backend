import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EGender } from './child-gender.enum';

@Entity()
export class Child {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  gender: EGender;

  @Column()
  birth: string;

  @Column()
  photo: string;
}
