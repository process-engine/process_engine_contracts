import {EventMessageType} from './event_message_types';

/**
 * The base class for all event based messages that can be sent/received
 * through the internal EventAggregator.
 */
export abstract class EventReachedMessage {

  protected _eventId: string;
  protected _tokenPayload: any;
  protected _messageType: EventMessageType;

  constructor(eventId: string, tokenPayload: any) {
    this._eventId = eventId;
    this._tokenPayload = tokenPayload;
  }

  /**
   * The ID of the event that was reached.
   */
  public get eventId(): string {
    return this._eventId;
  }

  /**
   * The payload that was send with the event.
   */
  public get tokenPayload(): any {
    return this._tokenPayload;
  }


  /**
   * The type of EventMessage.
   */
  public get messageType(): EventMessageType {
    return this._messageType;
  }
}
