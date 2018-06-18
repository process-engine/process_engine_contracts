import {
  ErrorEventDefinition,
  MessageEventDefinition,
  SignalEventDefinition,
  TerminateEventDefinition,
  TimerEventDefinition,
} from '../event_definitions/index';

import {FlowNode} from './../base/index';

export abstract class Event extends FlowNode {
  public name: string;
  public terminateEventDefinition?: TerminateEventDefinition;
}
