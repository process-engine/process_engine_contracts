import { CatchEvent } from "./catch_event";

export class StartEvent extends CatchEvent {
  public isInterrupting: boolean;
}