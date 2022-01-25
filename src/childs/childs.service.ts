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
  // private childs: Child[] = [];
  // getChilds(): Child[] {
  //   return this.childs;
  // }

  async getChildById(id: string): Promise<Child> {
    const found = await this.childsRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Child with ID "${id}" not found`);
    }
    return found;
  }
  async createChild(createChildDto: CreateChildDto): Promise<Child> {
    return this.childsRepository.createChild(createChildDto);
  }
  // deleteChild(id: string): void {
  //   this.childs = this.childs.filter((child) => child.id !== id);
  // }
}
