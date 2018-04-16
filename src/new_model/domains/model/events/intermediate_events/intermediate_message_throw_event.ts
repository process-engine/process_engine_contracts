import {MessageReference} from '../../type_references/index';
import {Event} from '../event';

export class IntermediateThrowEvent extends Event {
  public messageEventDefinition: Array<MessageReference>;
}
