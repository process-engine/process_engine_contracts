import {StructureReference} from '../type_references/index';
import {EventDefinition} from './event_definition';

/**
 * Contains the definition for an ErrorEvent.
 */
export class ErrorEventDefinition extends EventDefinition {
  public name: string;
  public code: string;
  public structureRef: StructureReference;
}
