import {
  ErrorEventDefinition,
  MessageEventDefinition,
  SignalEventDefinition,
  TerminateEventDefinition,
  TimerEventDefinition,
} from '../event_definitions/index';

import {FlowNode} from './../base/index';
import {Error} from "../types/error";

export abstract class Event extends FlowNode {
  public name: string;
  public errorEventDefinition?: Error;
  public messageEventDefinition?: MessageEventDefinition;
  public signalEventDefinition?: SignalEventDefinition;
  public terminateEventDefinition?: TerminateEventDefinition;
  public timerEventDefinition?: TimerEventDefinition;
}
