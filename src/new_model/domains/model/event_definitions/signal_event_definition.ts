import { SignalReference } from '../type_references/index';
import { EventDefinition } from './index';

export class SignalEventDefinition extends EventDefinition {
  public signalReference: SignalReference;
}
