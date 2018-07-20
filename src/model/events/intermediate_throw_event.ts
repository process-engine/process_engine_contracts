import {
  MessageEventDefinition,
  SignalEventDefinition,
} from '../event_definitions/index';

import {BpmnType} from '../../constants';
import {Event} from './event';

export class IntermediateThrowEvent extends Event {
  public get bpmnType(): BpmnType {
    return BpmnType.intermediateThrowEvent;
  }

  public messageEventDefinition?: MessageEventDefinition;
  public signalEventDefinition?: SignalEventDefinition;
}
