import { EventDefinition, EventDefinitionReference } from "./event_definitions/event_definition";
import { Event } from "./event";

export class CatchEvent extends Event {
  public items: Array<EventDefinition> = [];
  public eventDefinitionReference: Array<EventDefinitionReference>;
}