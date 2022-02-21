import { IsEnum, IsNotEmpty } from 'class-validator';
import { EEvents } from '../event-events.enum';

export class CreateEventDto {
  @IsNotEmpty()
  @IsEnum(EEvents)
  event: EEvents;

  startTime: Date;

  endTime: Date;

  description: string;
}
