import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

  @Get('/:id')
  getChildById(@Param('id') id: string): Child {
    return this.childsService.getChildById(id);
  }

  @Post()
  createTask(
    @Body()
    createChildDto: CreateCheldDto,
  ): Child {
    return this.childsService.createChild(createChildDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    return this.childsService.deleteChild(id);
  }
}
