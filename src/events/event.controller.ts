import { Controller, Post } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('events')
export class EventController {
  constructor(private eventService: EventService) {}

  @Post()
  async create() {
    return 'create event';
  }
}
