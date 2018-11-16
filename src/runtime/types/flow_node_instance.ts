import {EventType} from '../../constants';
import {FlowNodeInstanceState} from './flow_node_instance_state';
import {ProcessToken} from './process_token';

/**
 * Describes a single FlowNodeInstance.
 */
export class FlowNodeInstance {
  public id: string;
  public flowNodeId: string;
  /**
   * Describes the type of FlowNode that this instance is executing.
   * Can be UserTask, ServiceTask, ScriptTask, etc.
   */
  public flowNodeType: string;
  /**
   * Optional: If the FlowNodeInstance is an Event, this will contain
   * the type of Event (Message, Signal, Timer, etc).
   *
   * If the FNI is a regular Start- or End- Event, this will be undefined.
   */
  public eventType?: EventType;
  public processInstanceId: string;
  public processModelId: string;
  public correlationId: string;
  public tokens: Array<ProcessToken>;
  public state: FlowNodeInstanceState = FlowNodeInstanceState.running;
  public error?: string;
  /**
   * Optional: Contains the InstanceId of the FlowNodeInstance that was executed
   * before this one.
   *
   * StartEvents will not have a predecessor, naturally.
   */
  public previousFlowNodeInstanceId?: string;
}
