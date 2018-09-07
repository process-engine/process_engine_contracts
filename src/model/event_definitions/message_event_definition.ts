import {EventDefinition} from './event_definition';

/**
 * Contains the definition for a MessageEvent.
 */
export class MessageEventDefinition extends EventDefinition {
  /**
   * The reference to the message to throw/catch.
   */
  public messageRef: string;
}
