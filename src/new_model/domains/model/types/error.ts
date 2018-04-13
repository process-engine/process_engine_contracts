import { BaseElement } from '../base/index';
import { StructureReference } from '../type_references/index';

export class Error extends BaseElement {
  public name: string;
  public errorCode: string;
  public structureRef: StructureReference;
}
