import {EventDefinition} from './event_definition';

/**
 * Contains the definition for a SignalEvent.
 */
export class SignalEventDefinition extends EventDefinition {
  /**
   * The reference to the signal to throw/catch.
   */
  public signalRef: string;
}
