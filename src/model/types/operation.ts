import {BaseElement} from '../base/index';
import {ErrorReference, MessageReference} from '../type_references/index';

// TODO: Not used anywhere - Do we still need this?
export class Operation extends BaseElement {
  public name: string;
  public inMessageReference: MessageReference;
  public outMessageReference: MessageReference;
  public errorReferences: Array<ErrorReference>;
  // TODO: clarify if we still want to identify a class method
  //       or if we want to reference a web service (default in the spec)
  public implementationReference: any;
}
