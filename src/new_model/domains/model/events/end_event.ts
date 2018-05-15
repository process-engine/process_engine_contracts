import { Event } from './event';
import { BpmnType } from '../../../../constants';

export class EndEvent extends Event {
  public get bpmnType(): BpmnType {
    return BpmnType.endEvent;
  }
  // TODO: Clarify if necessary and how to implement this.
  // public isInterrupting: boolean;
}
