import { TSAnyKeyword } from '@babel/types';
import { EntityRepository, Repository } from 'typeorm';
import { Child } from './childs.entity';
import { CreateChildDto } from './dto/create-child.dto';

@EntityRepository(Child)
export class ChildsRepository extends Repository<Child> {
  async getChilds(): Promise<Child[]> {
    const query = this.createQueryBuilder('task');

    const childs = await query.getMany();
    return childs;
  }

  async createChild(createChildDto: CreateChildDto): Promise<Child> {
    const { name, gender, birth, photo } = createChildDto;
    const child = this.create({
      name,
      gender,
      birth,
      photo,
    });
    await this.save(child);

    return child;
  }
}
