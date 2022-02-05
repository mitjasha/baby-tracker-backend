import { TSAnyKeyword } from '@babel/types';
import { UserEntity } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Child } from './childs.entity';
import { CreateChildDto } from './dto/create-child.dto';

@EntityRepository(Child)
export class ChildsRepository extends Repository<Child> {
  async getChilds(user: UserEntity): Promise<Child[]> {
    const query = this.createQueryBuilder('task');
    query.where({ user });

    const childs = await query.getMany();
    return childs;
  }

  async createChild(
    createChildDto: CreateChildDto,
    user: UserEntity,
  ): Promise<Child> {
    const { name, gender, birth, photo } = createChildDto;
    const child = this.create({
      name,
      gender,
      birth,
      photo,
      user,
    });
    await this.save(child);

    return child;
  }
}
