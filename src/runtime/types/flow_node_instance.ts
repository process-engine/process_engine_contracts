import {IIdentity} from '@essential-projects/iam_contracts';
import {BpmnType, EventType} from '../../constants';
import {FlowNodeInstanceState} from './flow_node_instance_state';
import {ProcessToken} from './process_token';

/**
 * Describes a single FlowNodeInstance.
 */
export class FlowNodeInstance {
  public id: string;
  public flowNodeInstanceId: string;
  public flowNodeId: string;
  /**
   * Describes the type of FlowNode that this instance is executing.
   * Can be UserTask, ServiceTask, ScriptTask, etc.
   */
  public flowNodeType: BpmnType;
  /**
   * Optional: If the FlowNodeInstance is an Event, this will contain
   * the type of Event (Message, Signal, Timer, etc).
   *
   * If the FNI is a regular Start- or End- Event, this will be undefined.
   */
  public eventType?: EventType;
  public correlationId: string;
  public processModelId: string;
  public processInstanceId: string;
  public identity: IIdentity;
  /**
   * Optional: If the current ProcessInstance was invoked by another
   * Process (with a CallActivity or if the current Process is a
   * Subprocess), the ProcessInstanceId of the invoking Process will be
   * stored here.
   */
  public parentProcessInstanceId?: string;
  public state: FlowNodeInstanceState = FlowNodeInstanceState.running;
  public error?: string;
  public tokens: Array<ProcessToken>;
  /**
   * Optional: Contains the InstanceId of the FlowNodeInstance that was executed
   * before this one.
   *
   * StartEvents will not have a predecessor, naturally.
   */
  public previousFlowNodeInstanceId?: string;
}
