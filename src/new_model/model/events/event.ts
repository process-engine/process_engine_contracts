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
  public errorEventDefinition?: ErrorEventDefinition;
  public messageEventDefinition?: MessageEventDefinition;
  public signalEventDefinition?: SignalEventDefinition;
  public terminateEventDefinition?: TerminateEventDefinition;
  public timerEventDefinition?: TimerEventDefinition;
}
