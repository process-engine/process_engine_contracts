import {BpmnType, EventType} from '../../constants';
import {Event} from './event';

import { textChangeRangeIsUnchanged } from 'typescript';
import {
  ErrorEventDefinition,
  MessageEventDefinition,
  SignalEventDefinition,
  TerminateEventDefinition,
} from '../event_definitions/index';

/**
 * Describes a BPMN EndEvent.
 * These are used to finish a process.
 *
 * Depending on the type of EndEvent used, the process will either be finished
 * with a success message or an error.
 */
export class EndEvent extends Event {
  public get bpmnType(): BpmnType {
    return BpmnType.endEvent;
  }

  public get eventType(): EventType {
    const eventIsErrorEvent: boolean = this.errorEventDefinition !== undefined &&
                                       this.errorEventDefinition !== null;
    if (eventIsErrorEvent) {

      return EventType.errorEvent;
    }

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

    const eventIsTerminateEvent: boolean = this.terminateEventDefinition !== undefined &&
                                           this.terminateEventDefinition !== null;
    if (eventIsTerminateEvent) {

      return EventType.terminateEvent;
    }
  }

  public errorEventDefinition?: ErrorEventDefinition;
  public messageEventDefinition?: MessageEventDefinition;
  public signalEventDefinition?: SignalEventDefinition;
  public terminateEventDefinition?: TerminateEventDefinition;

}
