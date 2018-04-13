import { EventDefinition } from '../event_definitions/index';
import { EventDefinitionReference } from '../type_references/index';
import { Event } from './event';

export abstract class CatchEvent extends Event {
  public items: Array<EventDefinition> = [];
  public eventDefinitionReference: Array<EventDefinitionReference>;
}