import { IsEnum, IsNotEmpty } from 'class-validator';
import { EEvents } from '../event-events.enum';

export class CreateEventDto {
  @IsNotEmpty()
  @IsEnum(EEvents)
  event: EEvents;

  @IsNotEmpty()
  startTime: number;

  endTime: number;

  description: string;
}
