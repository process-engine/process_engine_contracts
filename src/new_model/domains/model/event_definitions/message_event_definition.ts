import { EventDefinition } from "./index";
import { MessageReference } from "../type_references/index";

export class MessageEventDefinition extends EventDefinition {
  public messageReference: MessageReference;
}
