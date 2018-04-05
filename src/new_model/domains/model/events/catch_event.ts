import { Event } from './index';
import { EventDefinition } from '../event_definitions/index';
import { EventDefinitionReference } from '../type_references/index';

export abstract class CatchEvent extends Event {
  public items: Array<EventDefinition> = [];
  public eventDefinitionReference: Array<EventDefinitionReference>;
}
