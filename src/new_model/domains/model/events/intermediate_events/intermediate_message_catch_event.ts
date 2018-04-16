import {MessageReference} from '../../type_references/index';
import {Event} from '../event';

export class IntermediateCatchEvent extends Event {
  public messageEventDefinition: Array<MessageReference>;
}
