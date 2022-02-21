import { IsEnum, IsNotEmpty } from 'class-validator';
import { EEvents } from '../event-events.enum';

export class UpdateEventDto {
  //   @IsNotEmpty()
  //   @IsEnum(EEvents)
  //   event: EEvents;

  //   @IsNotEmpty()
  startTime: Date;

  endTime: Date;

  description: string;
}
