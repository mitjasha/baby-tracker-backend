import { Injectable } from '@nestjs/common';
import { Child, EGender } from './child.model';
import { CreateCheldDto } from './dto/create-child.dto';

@Injectable()
export class ChildsService {
  private childs: Child[] = [];

  getChilds(): Child[] {
    return this.childs;
  }

  createChild(createChildDto: CreateCheldDto): Child {
    const { name, gender, birth, photo } = createChildDto;

    const child: Child = {
      id: '',
      name,
      gender,
      birth,
      photo,
    };

    this.childs.push(child);
    return child;
  }
}
