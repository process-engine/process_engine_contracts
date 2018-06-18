import { BpmnType } from '../../../constants';
import { Event } from './event';

import {
  ErrorEventDefinition,
  MessageEventDefinition,
  SignalEventDefinition,
  TerminateEventDefinition,
} from '../event_definitions/index';

export class EndEvent extends Event {
  public get bpmnType(): BpmnType {
    return BpmnType.endEvent;
  }

  public errorEventDefinition?: ErrorEventDefinition;
  public terminateEventDefinition?: TerminateEventDefinition;
  public messageEventDefinition?: MessageEventDefinition;
  public signalEventDefinition?: SignalEventDefinition

  // TODO: Clarify if necessary and how to implement this.
  // public isInterrupting: boolean;
}
