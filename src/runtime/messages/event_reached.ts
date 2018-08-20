import {EventMessageType} from './event_message_types';

export abstract class EventReachedMessage {

  protected _eventId: string;
  protected _tokenPayload: any;
  protected _messageType: EventMessageType;

  constructor(eventId: string, tokenPayload: any) {
    this._eventId = eventId;
    this._tokenPayload = tokenPayload;
  }

  public get eventId(): string {
    return this.eventId;
  }

  public get tokenPayload(): any {
    return this._tokenPayload;
  }

  public get messageType(): EventMessageType {
    return this._messageType;
  }
}
