import {Model, Runtime} from '@process-engine/process_engine_contracts';

export interface IFlowNodePersistenceFacade {
  /**
   * Persists the current state of the FlowNodeInstance, after it successfully
   * started execution.
   *
   * @async
   * @param flowNode                   The FlowNodeInstance's Model.
   * @param flowNodeInstanceId         The FlowNodeInstance's ID.
   * @param processToken               The current ProcessToken.
   * @param previousFlowNodeInstanceId The ID of the FlowNodeInstance that came
   *                                   before.
   */
  persistOnEnter(
    flowNode: Model.Base.FlowNode,
    flowNodeInstanceId: string,
    processToken: Runtime.Types.ProcessToken,
    previousFlowNodeInstanceId?: string,
  ): Promise<void>;

  /**
   * Persists the current state of the FlowNodeInstance, after it successfully
   * finished execution.
   *
   * @async
   * @param flowNode                   The FlowNodeInstance's Model.
   * @param flowNodeInstanceId         The FlowNodeInstance's ID.
   * @param processToken               The current ProcessToken.
   * @param previousFlowNodeInstanceId The ID of the FlowNodeInstance that came
   *                                   before.
   */
  persistOnExit(
    flowNode: Model.Base.FlowNode,
    flowNodeInstanceId: string,
    processToken: Runtime.Types.ProcessToken,
    previousFlowNodeInstanceId?: string,
  ): Promise<void>;

  /**
   * Persists the current state of the FlowNodeInstance, after it was aborted,
   * due to process termination.
   *
   * @async
   * @param flowNode                   The FlowNodeInstance's Model.
   * @param flowNodeInstanceId         The FlowNodeInstance's ID.
   * @param processToken               The current ProcessToken.
   * @param previousFlowNodeInstanceId The ID of the FlowNodeInstance that came
   *                                   before.
   */
  persistOnTerminate(
    flowNode: Model.Base.FlowNode,
    flowNodeInstanceId: string,
    processToken: Runtime.Types.ProcessToken,
    previousFlowNodeInstanceId?: string,
  ): Promise<void>;

  /**
   * Persists the current state of the FlowNodeInstance, after it encountered
   * an error.
   *
   * @async
   * @param flowNode                   The FlowNodeInstance's Model.
   * @param flowNodeInstanceId         The FlowNodeInstance's ID.
   * @param processToken               The current ProcessToken.
   * @param error                      The error that occured.
   * @param previousFlowNodeInstanceId The ID of the FlowNodeInstance that came
   *                                   before.
   */
  persistOnError(
    flowNode: Model.Base.FlowNode,
    flowNodeInstanceId: string,
    processToken: Runtime.Types.ProcessToken,
    error: Error,
    previousFlowNodeInstanceId?: string,
  ): Promise<void>;

  /**
   * Suspends the execution of the given FlowNodeInstance.
   *
   * @async
   * @param flowNode                   The FlowNodeInstance's Model.
   * @param flowNodeInstanceId         The FlowNodeInstance's ID.
   * @param processToken               The current ProcessToken.
   * @param previousFlowNodeInstanceId The ID of the FlowNodeInstance that came
   *                                   before.
   */
  persistOnSuspend(
    flowNode: Model.Base.FlowNode,
    flowNodeInstanceId: string,
    processToken: Runtime.Types.ProcessToken,
    previousFlowNodeInstanceId?: string,
  ): Promise<void>;

  /**
   * Resumes execution of the given suspended FlowNodeInstance.
   *
   * @async
   * @param flowNode                   The FlowNodeInstance's Model.
   * @param flowNodeInstanceId         The FlowNodeInstance's ID.
   * @param processToken               The current ProcessToken.
   * @param previousFlowNodeInstanceId The ID of the FlowNodeInstance that came
   *                                   before.
   */
  persistOnResume(
    flowNode: Model.Base.FlowNode,
    flowNodeInstanceId: string,
    processToken: Runtime.Types.ProcessToken,
    previousFlowNodeInstanceId?: string,
  ): Promise<void>;
}
