import { Injectable, NotFoundException } from '@nestjs/common';
import { Child, EGender } from './child.model';
import { CreateCheldDto } from './dto/create-child.dto';

@Injectable()
export class ChildsService {
  private childs: Child[] = [];

  getChilds(): Child[] {
    return this.childs;
  }

  getChildById(id: string): Child {
    const found = this.childs.find((child) => child.id === id);
    if (!found) {
      throw new NotFoundException(`Child with ID "${id}" not found`);
    }
    return found;
  }

  createChild(createChildDto: CreateCheldDto): Child {
    const { name, gender, birth, photo } = createChildDto;

    const child: Child = {
      id: Date.now().toString(),
      name,
      gender,
      birth,
      photo,
    };

    this.childs.push(child);
    return child;
  }

  deleteChild(id: string): void {
    this.childs = this.childs.filter((child) => child.id !== id);
  }
}
