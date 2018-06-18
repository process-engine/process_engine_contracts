import { BpmnType } from '../../../constants';
import { Event } from './event';

import {
  MessageEventDefinition,
  SignalEventDefinition,
  TimerEventDefinition,
} from '../event_definitions/index';
export class StartEvent extends Event {
  public get bpmnType(): BpmnType {
    return BpmnType.startEvent;
  }

  public messageEventDefinition?: MessageEventDefinition;
  public timerEventDefinition?: TimerEventDefinition;
  public signalEventDefinition?: SignalEventDefinition;

  // TODO: Clarify if necessary and how to implement this.
  // public isInterrupting: boolean;
}
