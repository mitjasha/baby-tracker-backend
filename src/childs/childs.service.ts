import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

  getChilds(): Promise<Child[]> {
    return this.childsRepository.getChilds();
  }

  async getChildById(id: string): Promise<Child> {
    const found = await this.childsRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Child with ID "${id}" not found`);
    }
    return found;
  }

  createChild(createChildDto: CreateChildDto): Promise<Child> {
    return this.childsRepository.createChild(createChildDto);
  }

  async deleteChild(id: string): Promise<void> {
    const result = await this.childsRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Child with "${id}" not found`);
    }
  }
}
