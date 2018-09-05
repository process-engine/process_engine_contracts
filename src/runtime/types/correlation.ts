import {FlowNodeInstanceState} from './flow_node_instance_state';

export class Correlation {
  public id: string;
  public processModelId: string;
  public state: FlowNodeInstanceState;
  public processModelHash?: string;
  public processModelXml?: string;
  public createdAt?: Date;
}
