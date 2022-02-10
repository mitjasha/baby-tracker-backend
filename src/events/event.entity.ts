import { Exclude } from 'class-transformer';
import { Child } from 'src/childs/childs.entity';
import {
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EEvents } from './event-events.enum';

@Entity('events')
export class ChildEventEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  event: EEvents;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  startTime: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  endTime: Date;

  @Column()
  description: string;

  @BeforeUpdate()
  updateTimestamp() {
    this.endTime = new Date();
  }

  @ManyToOne((_type) => Child, (child) => child.childEvents)
  child: Child;
}
