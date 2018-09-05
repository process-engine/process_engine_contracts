// The structure currently serves as a placeholder since we didn't talk about
// this use case before
//
// A reference to a structure might be necessary for serialization purposes
// TODO: Not used anywhere - Do we still need this?
export class Structure {
  public structureId: string;
  // this is defined as an XSD Complex Type
  // we need to identify what the use case for the structure is to decide
  // whether we need a JSON Schema or just a design time type reference
  // (generics)
  public jsonSchemaOrType: any;
}
