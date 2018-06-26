import {BpmnType} from '../../../constants';
import {Event} from './event';

import {
  ErrorEventDefinition,
  MessageEventDefinition,
  SignalEventDefinition,
  TimerEventDefinition,
} from '../event_definitions/index';

export class BoundaryEvent extends Event {
  public get bpmnType(): BpmnType {
    return BpmnType.boundaryEvent;
  }
  public errorEventDefinition?: ErrorEventDefinition;
  public messageEventDefinition?: MessageEventDefinition;
  public signalEventDefinition?: SignalEventDefinition;
  public timerEventDefinition?: TimerEventDefinition;
  public cancelActivity: boolean;
  public attachedToRef: string;
}
