import {FlowNode} from '../../model/base/flow_node';
import {ProcessToken} from '../types/process_token';
import {IFlowNodeHandler} from './iflow_node_handler';

/**
 * Describes the signature a callback for an interruption event should have.
 */
export type onInterruptionCallback = (interruptionToken: ProcessToken) => void | Promise<void>;

/**
 * Derived FlowNodeHandler, specialized for handling activities.
 */
export interface IActivityHandler<TFlowNode extends FlowNode> extends IFlowNodeHandler<TFlowNode> {
  /**
   * This will interrupt the execution of the ActivityHandler, causing it to cease all
   * function and exiting.
   * Activities can be interrupted by BoundaryEvents or TerminateEndEvents.
   *
   * @param token     The current ProcessToken.
   * @param terminate Optional: If set to true, the activity will terminate,
   *                  rather than finish regularily.
   */
  interrupt(token: ProcessToken, terminate?: boolean): void | Promise<void>;
}
