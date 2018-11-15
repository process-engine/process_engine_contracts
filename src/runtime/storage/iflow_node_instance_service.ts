import {Model} from '../../model';
import {FlowNodeInstance, ProcessToken} from '../types/index';

/**
 * The Service used to access the FlowNodeInstance repository.
 *
 * This is the key repository for handling ProcessInstances, for this repository
 * contains any and all information pertaining to the execution of all the
 * FlowNodes that belong to the ProcessInstance.
 */
export interface IFlowNodeInstanceService {

  /**
   * Persists the state of a FlowNodeInstance when it was first started.
   *
   * @async
   * @param   flowNode           The FlowNode to persist.
   * @param   flowNodeInstanceId The ID of the FlowNodeInstance to persist.
   * @param   token              Contains the FlowNodeInstances ProcessToken.
   * @returns                    The persisted FlowNodeInstance.
   */
  persistOnEnter(flowNode: Model.Base.FlowNode, flowNodeInstanceId: string, token: ProcessToken): Promise<FlowNodeInstance>;

  /**
   * Persists the state of a FlowNodeInstance when it was successfully finished.
   *
   * @async
   * @param   flowNode           The FlowNode to persist.
   * @param   flowNodeInstanceId The ID of the FlowNodeInstance to persist.
   * @param   token              Contains the FlowNodeInstances ProcessToken.
   * @returns                    The persisted FlowNodeInstance.
   */
  persistOnExit(flowNode: Model.Base.FlowNode, flowNodeInstanceId: string, token: ProcessToken): Promise<FlowNodeInstance>;

  /**
   * Persists the state of a FlowNodeInstance when it encountered an error.
   *
   * Only used by ErrorEndEvents, ServiceTasks and ScriptTasks.
   *
   * @async
   * @param   flowNode           The FlowNode to persist.
   * @param   flowNodeInstanceId The ID of the FlowNodeInstance to persist.
   * @param   token              Contains the FlowNodeInstances ProcessToken.
   * @param   error              The error that was encountered.
   * @returns                    The persisted FlowNodeInstance.
   */
  persistOnError(flowNode: Model.Base.FlowNode, flowNodeInstanceId: string, token: ProcessToken, error: Error): Promise<FlowNodeInstance>;

  /**
   * Persists the state of a FlowNodeInstance when it was terminated.
   *
   * This will be the case, if the execution of the ProcessModel was aborted
   * through a TerminateEndEvent.
   *
   * @async
   * @param   flowNode           The FlowNode to persist.
   * @param   flowNodeInstanceId The ID of the FlowNodeInstance to persist.
   * @param   token              Contains the FlowNodeInstances ProcessToken.
   * @returns                    The persisted FlowNodeInstance.
   */
  persistOnTerminate(flowNode: Model.Base.FlowNode, flowNodeInstanceId: string, token: ProcessToken): Promise<FlowNodeInstance>;

  /**
   * Moves the FlowNodeInstance into a suspended state, effectively putting the
   * execution of the ProcessInstance on hold.
   *
   * @async
   * @param   flowNodeId         The ID of the FlowNode to suspend.
   * @param   flowNodeInstanceId The ID of the FlowNodeInstance to suspend.
   * @param   token              Contains the FlowNodeInstances ProcessToken.
   * @returns                    The suspended FlowNodeInstance.
   */
  suspend(flowNodeId: string, flowNodeInstanceId: string, token: ProcessToken): Promise<FlowNodeInstance>;

  /**
   * Resumes executing a suspended FlowNodeInstance.
   *
   * This only works on FlowNodeInstances, which have previously been put
   * into a 'suspended' state.
   *
   * @async
   * @param   flowNodeId         The ID of the FlowNode to resume.
   * @param   flowNodeInstanceId The ID of the FlowNodeInstance to resume.
   * @param   token              Contains the FlowNodeInstances ProcessToken.
   * @returns                    The resumed FlowNodeInstance.
   */
  resume(flowNodeId: string, flowNodeInstanceId: string, token: ProcessToken): Promise<FlowNodeInstance>;

  /**
   * Gets the FlowNode belonging to a specific ProcessModel within a specific
   * Correlation.
   *
   * @async
   * @param   correlationId  The ID of the Correlation to query.
   * @param   processModelId The ID of the ProcessModel to query.
   * @param   flowNodeId     The ID of the flowNode for which to retrieve
   *                         FlowNodeInstances.
   * @returns                The retrieved FlowNodeInstance.
   */
  querySpecificFlowNode(correlationId: string, processModelId: string, flowNodeId: string): Promise<FlowNodeInstance>;

  /**
   * Gets all FlowNodeInstances with a specific flowNodeId.
   *
   * @async
   * @param   flowNodeId The ID of the flowNode for which to retrieve
   *                     FlowNodeInstances.
   * @returns            The retrieved FlowNodeInstances.
   */
  queryByFlowNodeId(flowNodeId: string): Promise<Array<FlowNodeInstance>>;

  /**
   * Gets a FlowNodeInstance by its flowNodeInstanceId.
   *
   * @async
   * @param   flowNodeInstanceId The ID of the FlowNodeInstance to retrieve.
   * @returns                    The retrieved FlowNodeInstance.
   * @throws                     404, if the FlowNodeInstance was not found.
   */
  queryByInstanceId(flowNodeInstanceId: string): Promise<FlowNodeInstance>;

  /**
   * Gets all FlowNodeInstances of a specific Correlation.
   *
   * @async
   * @param   correlationId The ID of the Correlation for which to get the
   *                        FlowNodeInstances.
   * @returns               The retrieved FlowNodeInstances.
   */
  queryByCorrelation(correlationId: string): Promise<Array<FlowNodeInstance>>;

  /**
   * Gets all FlowNodeInstances of a specific ProcessModel.
   *
   * @async
   * @param   processModelId The ID of the ProcessModel for which to get the
   *                         FlowNodeInstances.
   * @returns                The retrieved FlowNodeInstances.
   */
  queryByProcessModel(processModelId: string): Promise<Array<FlowNodeInstance>>;

  /**
   * Gets all suspended FlowNodeInstances of a specific Correlation.
   *
   * @async
   * @param   correlationId The ID of the Correlation for which to get the
   *                        FlowNodeInstances.
   * @returns               The retrieved FlowNodeInstances.
   */
  querySuspendedByCorrelation(correlationId: string): Promise<Array<FlowNodeInstance>>;

  /**
   * Gets all suspended FlowNodeInstances of a specific ProcessModel.
   *
   * @async
   * @param   processModelId The ID of the ProcessModel for which to get the
   *                         FlowNodeInstances.
   * @returns                The retrieved FlowNodeInstances.
   */
  querySuspendedByProcessModel(processModelId: string): Promise<Array<FlowNodeInstance>>;

  /**
   * Gets all ProcessTokens of a specific ProcessInstance.
   *
   * @async
   * @param   processInstanceId The ID of the ProcessInstance for which to get the
   *                            ProcessTokens.
   * @returns                   The retrieved ProcessTokens.
   */
  queryProcessTokensByProcessInstanceId(processInstanceId: string): Promise<Array<ProcessToken>>;

  /**
   * Delets all FlowNodeInstance and ProcessTokens with a specific ProcessModelId
   *
   * @async
   * @param   processModelId The ID of the ProcessModel, by which the FlowNodeInstances and the
   *                          ProcessTokens should be removed
   */
  deleteByProcessModelId(processModelId: string): Promise<void>;
}
