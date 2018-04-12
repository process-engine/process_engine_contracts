import { SignalReference } from '../type_references/index';
import { EventDefinition } from './event_definition';

export class SignalEventDefinition extends EventDefinition {
  public signalReference: SignalReference;
}
