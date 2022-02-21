import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/auth/user.entity';
import { Child } from 'src/childs/childs.entity';
import { ChildsRepository } from 'src/childs/childs.repository';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/createEvent.dto';
import { UpdateEventDto } from './dto/updateEvent.dto';
import { ChildEventEntity } from './event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(ChildEventEntity)
    private eventRepository: Repository<ChildEventEntity>,
    @InjectRepository(Child)
    private childsRepository: Repository<Child>,
  ) {}

  async createEvent(
    createEventDto: CreateEventDto,
    child: Child,
  ): Promise<ChildEventEntity> {
    const { event, startTime, endTime, description } = createEventDto;

    const events = this.eventRepository.create({
      event,
      startTime,
      endTime,
      description,
      child,
    });
    return await this.eventRepository.save(events);
  }

  async getEvents(child: Child): Promise<ChildEventEntity[]> {
    return this.eventRepository.find({
      relations: ['child'],
      where: { child: child },
    });
  }

  async updateEvent(id: string, updateEventDto: UpdateEventDto) {
    return await this.eventRepository.update(id, updateEventDto);
  }

  async deleteEvent(id: string) {
    const result = await this.eventRepository.delete({ id });
    return `event ${id} removed`;
  }

  async getChild(id: string, user: UserEntity) {
    return this.childsRepository.findOne({ where: { id, user } });
  }
}
