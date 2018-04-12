import { ErrorReference } from '../type_references/index';
import { EventDefinition } from './event_definition';

export class ErrorEventDefinition extends EventDefinition {
  public errorReference: ErrorReference;
}
