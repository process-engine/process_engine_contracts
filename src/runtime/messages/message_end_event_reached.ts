import {EventMessageType} from './event_message_types';
import {EventReachedMessage} from './event_reached';

/**
 * Encapsulates a Message for the EventAggregator, describing a
 * MessageEndEvent.
 */
export class MessageEndEventReachedMessage extends EventReachedMessage {

  constructor(messageEventId: string, tokenPayload: any) {
    super(messageEventId, tokenPayload);

    this._messageType = EventMessageType.message;
  }
}
