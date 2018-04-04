import { ThrowEvent } from "./throw_event";

export class EndEvent extends ThrowEvent {
  public isInterrupting: boolean;
}