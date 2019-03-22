import {ProcessToken} from '../../types/process_token';

/**
 * The signature for the interruption callback function.
 * This callback can be used by the derived FlowNodeHandlers to perform cleanup
 * operations after being interrupted.
 */
export type onInterruptionCallback = (interruptionToken: ProcessToken) => void | Promise<void>;

/**
 * Contains function definitions for interrupting a FlowNodeHandler.
 */
export interface IInterruptible {

  /**
   * This will interrupt the execution of a FlowNodeHandler, causing it to cease all
   * function and exiting.
   * Activities can be interrupted by BoundaryEvents, TerminateEndEvents, or
   * manual cancellation of the ProcessInstance.
   *
   * In case of the latter, no InterruptorInstanceId will be available.
   *
   * @async
   * @param token                 The current ProcessToken.
   * @param terminate             Optional: If set to true, the activity will
   *                              terminate, rather than interrupt.
   * @param interruptorInstanceId Optional: The instance ID of the FlowNode
   *                              that caused the interruption.
   */
  interrupt(token: ProcessToken, terminate?: boolean, interruptorId?: string): void | Promise<void>;
}
