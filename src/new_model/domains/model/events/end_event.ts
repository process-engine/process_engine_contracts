import { ThrowEvent } from './index';

export class EndEvent extends ThrowEvent {
  public isInterrupting: boolean;
}
