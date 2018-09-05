import {
  MessageEventDefinition,
  SignalEventDefinition,
  TimerEventDefinition,
} from '../event_definitions/index';

import {BpmnType} from '../../constants';
import {Event} from './event';

/**
 * Describes a BPMN IntermediateThrowEvent.
 *
 * These are used to wait for events during ProcessModel execution.
 *
 * The only exception is the IntermediateTimerCatchEvent, which is used to halt
 * the execution for a given amount of time.
 */
export class IntermediateCatchEvent extends Event {
  public get bpmnType(): BpmnType {
    return BpmnType.intermediateCatchEvent;
  }

  /**
   * When using a IntermediateMessageCatchEvent, this will contain the message
   * to wait for.
   */
  public messageEventDefinition?: MessageEventDefinition;
  /**
   * When using a IntermediateMessageCatchEvent, this will contain the signal
   * to wait for.
   */
  public signalEventDefinition?: SignalEventDefinition;
  /**
   * When using a IntermediateTimerCatchEvent, this will contain the definiton
   * of the timer that is used to pause the execution.
   */
  public timerEventDefinition?: TimerEventDefinition;
}
