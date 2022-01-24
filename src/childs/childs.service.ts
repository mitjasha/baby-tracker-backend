import { Injectable } from '@nestjs/common';
import { Child, EGender } from './child.model';

@Injectable()
export class ChildsService {
  private childs: Child[] = [];

  getChilds(): Child[] {
    return this.childs;
  }

  createChild(
    name: string,
    birth: string,
    photo: string,
    gender: EGender,
  ): Child {
    const child: Child = {
      id: '',
      name,
      gender: EGender.NAN,
      birth,
      photo,
    };

    this.childs.push(child);
    return child;
  }
}
