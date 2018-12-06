import {FlowNodeInstanceState} from './flow_node_instance_state';

/**
 * Describes a ProcessModel within a Correlation.
 */
export class CorrelationProcessModel {
  public processDefinitionName: string;
  public hash: string;
  public xml: string;
  public processModelId: string;
  public processInstanceId?: string;
  public parentProcessInstanceId?: string;
  public state: FlowNodeInstanceState;
  public createdAt?: Date;
}
