import {Invocation} from './invocation';

/**
 * Used by ServiceTasks.
 * This contains the definition for an ExternalTask invocation.
 */
export class ExternalTaskInvocation extends Invocation {
  public method: string; // GET/POST/PUT/DELETE
  public url: string;
  public headers: string;
  public payload: string;
}
