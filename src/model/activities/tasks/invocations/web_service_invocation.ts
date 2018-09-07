import {Invocation} from './invocation';

/**
 * Used by ServiceTasks.
 * This contains the definition for a WebService invocation.
 */
export class WebServiceInvocation extends Invocation {
  public service: string;
}
