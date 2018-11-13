import {
  MessageEventDefinition,
  SignalEventDefinition,
} from '../event_definitions/index';

import {BpmnType, EventType} from '../../constants';
import {Event} from './event';

/**
 * Describes a BPMN IntermediateThrowEvent.
 *
 * These are used to raise events during ProcessModel execution.
 */
export class IntermediateThrowEvent extends Event {
  public get bpmnType(): BpmnType {
    return BpmnType.intermediateThrowEvent;
  }

  public get eventType(): EventType {
    const eventIsMessageEvent: boolean = this.messageEventDefinition !== undefined &&
                                         this.messageEventDefinition !== null;
    if (eventIsMessageEvent) {

      return EventType.messageEvent;
    }

    const eventIsSignalEvent: boolean = this.signalEventDefinition !== undefined &&
                                        this.signalEventDefinition !== null;
    if (eventIsSignalEvent) {

      return EventType.signalEvent;
    }
  }

  /**
   * When using an IntermediateMessageThrowEvent, this will contain the message
   * to throw.
   */
  public messageEventDefinition?: MessageEventDefinition;
  /**
   * When using an IntermediateSignalThrowEvent, this will contain the signal
   * to throw.
   */
  public signalEventDefinition?: SignalEventDefinition;
}
