import {
  ErrorEventDefinition,
  MessageEventDefinition,
  SignalEventDefinition,
  TerminateEventDefinition,
  TimerEventDefinition,
} from '../event_definitions/index';

import { BpmnType } from '../../../constants';
import {FlowNode} from './../base/index';
import {Event} from './event';

export class IntermediateThrowEvent extends Event {
  public get bpmnType(): BpmnType {
    return BpmnType.intermediateThrowEvent;
  }
}
