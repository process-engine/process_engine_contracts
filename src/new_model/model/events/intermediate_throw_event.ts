import {
  MessageEventDefinition,
  SignalEventDefinition,
} from '../event_definitions/index';

import {BpmnType} from '../../../constants';
import {FlowNode} from './../base/index';
import {Event} from './event';

export class IntermediateThrowEvent extends Event {
  public get bpmnType(): BpmnType {
    return BpmnType.intermediateThrowEvent;
  }

  public messageEventDefinition?: MessageEventDefinition;
  public signalEventDefinition?: SignalEventDefinition;
}
