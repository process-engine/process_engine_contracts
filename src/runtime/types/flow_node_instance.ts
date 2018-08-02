import {FlowNodeInstanceState} from './flow_node_instance_state';
import {ProcessToken} from './process_token';

export class FlowNodeInstance {
  public id: string;
  public flowNodeId: string;
  public token: ProcessToken;
  public state: FlowNodeInstanceState = FlowNodeInstanceState.running;
  public isSuspended: boolean;
  public error?: string;
}
