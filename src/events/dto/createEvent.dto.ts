import { EEvents } from '../event-events.enum';

export class CreateEventDto {
  event: EEvents;

  startTime: number;

  endTime: number;

  description: string;
}
