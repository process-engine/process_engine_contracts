import { StructureReference } from '../type_references/index';

export class Error {
  public id: string;
  public errorCode: string;
  public name: string;
  public structureRef: StructureReference;
}
