// The structure currently serves as a placeholder since we didn't talk about
// this use case before
//
// A reference to a structure might be necessary for serialization purposes
export class Structure {
  public structureId: StructureId;
  // this is defined as an XSD Complex Type
  // we need to identify what the use case for the structure is to decide
  // whether we need a JSON Schema or just a design time type reference
  // (generics)
  public jsonSchemaOrType: any;
}

export class StructureReference {
  public structureId: StructureId;
}

export type StructureId = string;
