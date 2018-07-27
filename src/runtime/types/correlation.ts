import {FlowNodeInstanceState} from './flow_node_instance_state';

/**
 * Describes a correlation with an active process instance.
 */
export class Correlation {
  /**
   * The id of the correlation.
   */
  public id: string;
  /**
   * The id of the process model beloging to the correlation.
   */
  public processModelId: string;
  /**
   * The current state of the correlation. This is based on the state of the currently active flow node instance.
   */
  public state: FlowNodeInstanceState;
}
