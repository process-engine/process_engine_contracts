import {FlowNodeInstanceState} from './flow_node_instance_state';
import {ProcessToken} from './process_token';

/**
 * Describes a single flow node instance.
 */
export class FlowNodeInstance {
  /**
   * The id of the flow node instance.
   */
  public id: string;
  /**
   * The id of the flow node, as it is contained in the corresponding process model.
   */
  public flowNodeId: string;
  /**
   * The process token belonging to the flow node instance.
   */
  public token: ProcessToken;
  /**
   * The current state of the flow node instance. Default value is 'running'.
   */
  public state: FlowNodeInstanceState = FlowNodeInstanceState.running;
  /**
   * States if the flow node instance is currently suspended.
   * This is usually only relevant for user tasks.
   */
  public isSuspended: boolean;
}
