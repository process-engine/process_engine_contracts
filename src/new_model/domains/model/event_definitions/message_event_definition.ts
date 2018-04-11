import { MessageReference } from '../type_references/index';
import { EventDefinition } from './index';

export class MessageEventDefinition extends EventDefinition {
  public messageReference: MessageReference;
}
