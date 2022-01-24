import { Body, Controller, Get, Post } from '@nestjs/common';
import { Child, EGender } from './child.model';
import { ChildsService } from './childs.service';
import { CreateCheldDto } from './dto/create-child.dto';

@Controller('childs')
export class ChildsController {
  constructor(private childsService: ChildsService) {}

  @Get()
  getChilds(): Child[] {
    return this.childsService.getChilds();
  }

  @Post()
  createTask(
    @Body()
    createChildDto: CreateCheldDto,
  ): Child {
    return this.childsService.createChild(createChildDto);
  }
}
