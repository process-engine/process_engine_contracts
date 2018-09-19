import {EventMessageType} from './event_message_types';
import {EventReachedMessage} from './event_reached';

/**
 * Encapsulates a Message for the EventAggregator, describing a
 * SignalEvent.
 */
export class SignalEventReachedMessage extends EventReachedMessage {

  constructor(signalEventId: string, tokenPayload: any) {
    super(signalEventId, tokenPayload);

    this._messageType = EventMessageType.signal;
  }
}
