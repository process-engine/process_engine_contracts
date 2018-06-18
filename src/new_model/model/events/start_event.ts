import { BpmnType } from '../../../constants';
import { Event } from './event';

export class StartEvent extends Event {
  public get bpmnType(): BpmnType {
    return BpmnType.startEvent;
  }
  // TODO: Clarify if necessary and how to implement this.
  // public isInterrupting: boolean;
}