import { RootElement } from "../base/index";

export abstract class EventDefinition extends RootElement<EventDefinitionId> {

}

export type EventDefinitionId = string;

export class EventDefinitionReference {
  public eventDefinitionId: EventDefinitionId;
}
