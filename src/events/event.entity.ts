import { Exclude } from 'class-transformer';
import { Child } from 'src/childs/childs.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EEvents } from './event-events.enum';

@Entity('events')
export class ChildEventEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  event: EEvents;

  @Column()
  startTime: number;

  @Column()
  endTime: number;

  @Column()
  description: string;

  @ManyToOne((_type) => Child, (child) => child.childEvents)
  child: Child;
}
