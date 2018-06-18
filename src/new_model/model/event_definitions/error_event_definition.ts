import {EventDefinition} from './event_definition';
import {Error} from "../types/error";

export class ErrorEventDefinition extends EventDefinition {
  public errorReference: string;
  public errorObject: Error;
}
