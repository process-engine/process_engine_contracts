import {EventMessageType} from './event_message_types';
import {EventReachedMessage} from './event_reached';

export class TerminateEndEventReachedMessage extends EventReachedMessage{

  constructor(terminateEndEventId: string, tokenPayload: any) {
    super(terminateEndEventId, tokenPayload);

    this._messageType = EventMessageType.terminate;
  }
}
