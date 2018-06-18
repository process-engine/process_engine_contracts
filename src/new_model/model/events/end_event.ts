import {BpmnType} from '../../../constants';
import {Event} from './event';

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
  public messageEventDefinition?: MessageEventDefinition;
  public signalEventDefinition?: SignalEventDefinition;
  public terminateEventDefinition?: TerminateEventDefinition;

}
