import {Event} from './event';

export class BoundaryEvent extends Event {
  public cancelActivity: boolean;
  public attachedToRef: string;
}
