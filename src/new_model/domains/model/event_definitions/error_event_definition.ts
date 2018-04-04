import { EventDefinition } from "./index";
import { ErrorReference } from "../type_references/index";

export class ErrorEventDefinition extends EventDefinition {
  public errorReference: ErrorReference;
}
