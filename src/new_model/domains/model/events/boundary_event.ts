import { Event } from './event';

export class BoundaryEvent extends Event {
  public cancelActivity: boolean;
}
