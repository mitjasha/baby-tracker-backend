import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EGender } from './child-gender.enum';
import { Child } from './childs.entity';
import { ChildsService } from './childs.service';
import { CreateChildDto } from './dto/create-child.dto';

@Controller('childs')
export class ChildsController {
  constructor(private childsService: ChildsService) {}

  @Get()
  getChilds(): Promise<Child[]> {
    return this.childsService.getChilds();
  }

  @Get('/:id')
  getChildById(@Param('id') id: string): Promise<Child> {
    return this.childsService.getChildById(id);
  }

  @Post()
  createTask(
    @Body()
    createChildDto: CreateChildDto,
  ): Promise<Child> {
    return this.childsService.createChild(createChildDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): Promise<void> {
    return this.childsService.deleteChild(id);
  }
}
