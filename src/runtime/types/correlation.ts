import {FlowNodeInstanceState} from './flow_node_instance_state';

/**
 * Describes a Correlation with an active ProcessInstance.
 */
export class Correlation {
  /**
   * The id of the Correlation.
   */
  public id: string;
  /**
   * The id of the ProcessModel beloging to the Correlation.
   */
  public processModelId: string;
  /**
   * The current state of the Correlation. This is based on the state of the currently active FlowNodeInstance.
   */
  public state: FlowNodeInstanceState;
  public processModelHash?: string;
  public processModelXml?: string;
  public createdAt?: Date;
}
