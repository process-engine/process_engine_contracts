import {BpmnType} from '../../constants';
import {Event} from './event';

import {
  MessageEventDefinition,
  SignalEventDefinition,
  TimerEventDefinition,
} from '../event_definitions/index';

/**
 * Describes a BPMN StartEvent.
 */
export class StartEvent extends Event {
  public get bpmnType(): BpmnType {
    return BpmnType.startEvent;
  }

  public messageEventDefinition?: MessageEventDefinition;
  public timerEventDefinition?: TimerEventDefinition;
  public signalEventDefinition?: SignalEventDefinition;

}
