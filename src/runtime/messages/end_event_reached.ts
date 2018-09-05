import {EventMessageType} from './event_message_types';
import {EventReachedMessage} from './event_reached';

/**
 * Encapsulates a Message for the EventAggregator, describing a regular
 * EndEvent.
 */
export class EndEventReachedMessage extends EventReachedMessage {

  constructor(endEventId: string, tokenPayload: any) {
    super(endEventId, tokenPayload);

    this._messageType = EventMessageType.end;
  }
}
