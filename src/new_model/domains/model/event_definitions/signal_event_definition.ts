import { EventDefinition } from "./index";
import { SignalReference } from "../type_references/index";

export class SignalEventDefinition extends EventDefinition {
  public signalReference: SignalReference;
}
