import {FlowNodeInstanceState} from './flow_node_instance_state';
import {ProcessToken} from './process_token';

/**
 * Describes a single FlowNodeInstance.
 */
export class FlowNodeInstance {
  public id: string;
  public flowNodeId: string;
  public processInstanceId: string;
  public processModelId: string;
  public correlationId: string;
  public tokens: Array<ProcessToken>;
  public state: FlowNodeInstanceState = FlowNodeInstanceState.running;
  public error?: string;
}
