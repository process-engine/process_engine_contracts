import {Error} from '../types/error';
import {EventDefinition} from './event_definition';

export class ErrorEventDefinition extends EventDefinition {
  public errorReference: Error;
}
