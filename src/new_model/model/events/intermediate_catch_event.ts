import {
  MessageEventDefinition,
  SignalEventDefinition,
  TimerEventDefinition,
} from '../event_definitions/index';

import {BpmnType} from '../../../constants';
import {Event} from './event';

export class IntermediateCatchEvent extends Event {
  public get bpmnType(): BpmnType {
    return BpmnType.intermediateCatchEvent;
  }

  public messageEventDefinition?: MessageEventDefinition;
  public signalEventDefinition?: SignalEventDefinition;
  public timerEventDefinition?: TimerEventDefinition;
}
