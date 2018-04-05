import { ErrorReference } from '../type_references/index';
import { EventDefinition } from './index';

export class ErrorEventDefinition extends EventDefinition {
  public errorReference: ErrorReference;
}
