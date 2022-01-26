import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { EGender } from './child-gender.enum';
import { Child } from './childs.entity';
import { ChildsRepository } from './childs.repository';
import { CreateChildDto } from './dto/create-child.dto';

@Injectable()
export class ChildsService {
  constructor(
    @InjectRepository(ChildsRepository)
    private childsRepository: ChildsRepository,
  ) {}

  getChilds(user: User): Promise<Child[]> {
    return this.childsRepository.getChilds(user);
  }

  async getChildById(id: string, user: User): Promise<Child> {
    const found = await this.childsRepository.findOne({ where: { id, user } });

    if (!found) {
      throw new NotFoundException(`Child with ID "${id}" not found`);
    }
    return found;
  }

  createChild(createChildDto: CreateChildDto, user: User): Promise<Child> {
    return this.childsRepository.createChild(createChildDto, user);
  }

  async deleteChild(id: string, user: User): Promise<void> {
    const result = await this.childsRepository.delete({ id, user });

    if (result.affected === 0) {
      throw new NotFoundException(`Child with "${id}" not found`);
    }
  }
}
