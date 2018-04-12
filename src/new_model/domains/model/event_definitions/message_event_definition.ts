import { MessageReference } from '../type_references/index';
import { EventDefinition } from './event_definition';

export class MessageEventDefinition extends EventDefinition {
  public messageReference: MessageReference;
}
