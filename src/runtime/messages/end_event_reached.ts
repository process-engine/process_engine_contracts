import {EventMessageType} from './event_message_types';
import {EventReachedMessage} from './event_reached';

export class EndEventReachedMessage extends EventReachedMessage {

  constructor(endEventId: string, tokenPayload: any) {
    super(endEventId, tokenPayload);

    this._messageType = EventMessageType.end;
  }
}
