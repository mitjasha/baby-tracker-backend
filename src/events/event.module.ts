import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Child } from 'src/childs/childs.entity';
import { ChildsRepository } from 'src/childs/childs.repository';
import { EventController } from './event.controller';
import { ChildEventEntity } from './event.entity';
import { EventService } from './event.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChildEventEntity, Child])],
  controllers: [EventController],
  providers: [EventService, ChildsRepository],
})
export class EventModule {}
