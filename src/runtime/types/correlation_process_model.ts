import {FlowNodeInstanceState} from './flow_node_instance_state';

/**
 * Describes a ProcessModel within a Correlation.
 */
export class CorrelationProcessModel {
  public name: string;
  public hash: string;
  public xml: string;
  public processInstanceId?: string;
  public parentProcessInstanceId?: string;
  public createdAt?: Date;
}
