import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { UserEntity } from 'src/auth/user.entity';
import { EGender } from './child-gender.enum';
import { Child } from './childs.entity';
import { ChildsService } from './childs.service';
import { CreateChildDto } from './dto/create-child.dto';

@Controller('childs')
@UseGuards(AuthGuard())
export class ChildsController {
  constructor(private childsService: ChildsService) {}

  @Get()
  getChilds(@GetUser() user: UserEntity): Promise<Child[]> {
    return this.childsService.getChilds(user);
  }

  @Get('/:id')
  getChildById(
    @Param('id') id: string,
    @GetUser() user: UserEntity,
  ): Promise<Child> {
    return this.childsService.getChildById(id, user);
  }

  @Post()
  createChild(
    @Body()
    createChildDto: CreateChildDto,
    @GetUser() user: UserEntity,
  ): Promise<Child> {
    return this.childsService.createChild(createChildDto, user);
  }

  @Delete('/:id')
  deleteTask(
    @Param('id') id: string,
    @GetUser() user: UserEntity,
  ): Promise<void> {
    return this.childsService.deleteChild(id, user);
  }
}
