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
import { GetUser } from 'src/auth/get-user.decorator';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { UserEntity } from 'src/auth/user.entity';
import { Child } from 'src/childs/childs.entity';
import { CreateEventDto } from './dto/createEvent.dto';
import { UpdateEventDto } from './dto/updateEvent.dto';
import { ChildEventEntity } from './event.entity';
import { EventService } from './event.service';

@Controller('events')
export class EventController {
  constructor(private eventService: EventService) {}

  @Post(':childID/add')
  @UseGuards(AuthGuard)
  async createEvent(
    @Param('childID') childID: string,
    @Body()
    createEventDto: CreateEventDto,
    @GetUser() user: UserEntity,
  ): Promise<ChildEventEntity> {
    const child = await this.eventService.getChild(childID, user);
    return this.eventService.createEvent(createEventDto, child);
  }

  @Get(':childID/getAll')
  @UseGuards(AuthGuard)
  async getChilds(
    @Param('childID') childID: string,
    @GetUser() user: UserEntity,
  ): Promise<ChildEventEntity[]> {
    const child = await this.eventService.getChild(childID, user);
    return this.eventService.getEvents(child);
  }

  @Put('/:id')
  @UseGuards(AuthGuard)
  async updateEvent(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return this.eventService.updateEvent(id, updateEventDto);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard)
  async deleteEvent(@Param('id') id: string) {
    return this.eventService.deleteEvent(id);
  }
}
