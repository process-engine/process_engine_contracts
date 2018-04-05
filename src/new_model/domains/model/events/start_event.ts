import { CatchEvent } from './index';

export class StartEvent extends CatchEvent {
  public isInterrupting: boolean;
}