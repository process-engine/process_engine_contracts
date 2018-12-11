import {ProcessToken} from '../types/process_token';

/**
 * Describes the signature a callback for an interruption should have.
 */
export type onInterruptionCallback = (interruptionToken: ProcessToken) => void | Promise<void>;

/**
 * Contains function definitions for interrupting a FlowNodeHandler.
 */
export interface IInterruptable {
  /**
   * This will interrupt the execution of a FlowNodeHandler, causing it to cease all
   * function and exiting.
   * Activities can be interrupted by BoundaryEvents or TerminateEndEvents.
   *
   * @param token     The current ProcessToken.
   * @param terminate Optional: If set to true, the activity will terminate,
   *                  rather than finish regularily.
   */
  interrupt(token: ProcessToken, terminate?: boolean): void | Promise<void>;
}
