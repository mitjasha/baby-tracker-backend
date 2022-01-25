import { TSAnyKeyword } from '@babel/types';
import { EntityRepository, Repository } from 'typeorm';
import { Child } from './childs.entity';
import { CreateChildDto } from './dto/create-child.dto';

@EntityRepository(Child)
export class ChildsRepository extends Repository<Child> {
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
