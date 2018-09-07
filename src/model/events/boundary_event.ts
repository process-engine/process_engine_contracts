import {BpmnType} from '../../constants';
import {Event} from './event';

import {
  ErrorEventDefinition,
  MessageEventDefinition,
  SignalEventDefinition,
  TimerEventDefinition,
} from '../event_definitions/index';


/**
 * Describes a BPMN boundary event.
 *
 * These events are always attached to an activity and will only live
 * as long as that activity gets executed.
 */
export class BoundaryEvent extends Event {
  public get bpmnType(): BpmnType {
    return BpmnType.boundaryEvent;
  }
  public errorEventDefinition?: ErrorEventDefinition;
  public messageEventDefinition?: MessageEventDefinition;
  public signalEventDefinition?: SignalEventDefinition;
  public timerEventDefinition?: TimerEventDefinition;
  /**
   * If set to true, raising this event will cause the activity to
   * cease all operations.
   */
  public cancelActivity: boolean;
  /**
   * Contains the ID of the activity to which this event is attached.
   */
  public attachedToRef: string;
}
