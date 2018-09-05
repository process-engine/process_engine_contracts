import {BaseElement} from '../base/index';
import {ProcessReference} from '../type_references/index';

/**
 * Describes a BPMN Participant of a collaboration.
 */
export class Participant extends BaseElement {
  public name: string;
  public processReference: ProcessReference;
}
