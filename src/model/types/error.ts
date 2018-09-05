import {BaseElement} from '../base/index';
import {StructureReference} from '../type_references/index';

/**
 * Describes a BPMN error that can be thrown by an ErrorEndEvent.
 */
export class Error extends BaseElement {
  public name: string;
  public errorCode: string;
  public structureRef: StructureReference;
}
