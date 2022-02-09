import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/createEvent.dto';
import { ChildEventEntity } from './event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(ChildEventEntity)
    private eventRepository: Repository<ChildEventEntity>,
  ) {}

  async createEvent(createEventDto: CreateEventDto): Promise<ChildEventEntity> {
    return;
  }
}
