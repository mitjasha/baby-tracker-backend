import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { UserEntity } from 'src/auth/user.entity';
import { Child } from './childs.entity';
import { ChildsService } from './childs.service';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';

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

  @Post('/add')
  createChild(
    @Body()
    createChildDto: CreateChildDto,
    @GetUser() user: UserEntity,
  ): Promise<Child> {
    return this.childsService.createChild(createChildDto, user);
  }

  @Put('/:id')
  async updateChild(
    @Param('id') id: string,
    @Body()
    updateChildDto: UpdateChildDto,
    @GetUser() user: UserEntity,
  ) {
    return this.childsService.updateChild(id, updateChildDto);
  }

  @Delete('/:id')
  async deleteChild(
    @Param('id') id: string,
    @GetUser() user: UserEntity,
  ): Promise<void> {
    return this.childsService.deleteChild(id, user);
  }
}
