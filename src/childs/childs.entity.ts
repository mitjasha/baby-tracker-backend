import { Exclude } from 'class-transformer';
import { User } from 'src/auth/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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

  @ManyToOne((_type) => User, (user) => user.childs, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;
}
