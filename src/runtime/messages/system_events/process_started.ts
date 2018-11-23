import {BaseSystemEventMessage} from './base_system_event_message';

/**
 * The message which is send, when a new ProcessInstance started.
 */
export class ProcessStartedMessage extends BaseSystemEventMessage {

  constructor(correlationId: string,
              processModelId: string,
              processInstanceId: string,
              startEventId: string,
              currentToken: any) {
    super(correlationId, processModelId, processInstanceId, startEventId, undefined, currentToken);
  }
}
