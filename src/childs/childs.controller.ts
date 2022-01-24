import { Body, Controller, Get, Post } from '@nestjs/common';
import { Child, EGender } from './child.model';
import { ChildsService } from './childs.service';

@Controller('childs')
export class ChildsController {
  constructor(private childsService: ChildsService) {}

  @Get()
  getChilds(): Child[] {
    return this.childsService.getChilds();
  }

  @Post()
  createTask(
    @Body('name') name: string,
    @Body('birth') birth: string,
    @Body('photo') photo: string,
    @Body('gender') gender: EGender,
  ): Child {
    return this.childsService.createChild(name, birth, photo, gender);
  }
}
