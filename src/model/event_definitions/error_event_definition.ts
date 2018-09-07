import {Error} from '../types/error';
import {EventDefinition} from './event_definition';

/**
 * Contains the definition for an ErrorEvent.
 */
export class ErrorEventDefinition extends EventDefinition {
  /**
   * The reference to the error to throw/catch.
   */
  public errorReference: Error;
}
