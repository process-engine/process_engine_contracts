import { Event } from './event';

export class StartEvent extends Event {
  public isInterrupting: boolean;
}
