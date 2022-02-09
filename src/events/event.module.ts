import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventController } from './event.controller';
import { ChildEventEntity } from './event.entity';
import { EventService } from './event.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChildEventEntity])],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
