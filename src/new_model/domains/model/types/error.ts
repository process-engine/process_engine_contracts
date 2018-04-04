import { StructureReference } from '../base/structure';

export class Error {
  public id: ErrorId;
  public errorCode: string;
  public name: string;
  public structureRef: StructureReference;
}

export type ErrorId = string;
