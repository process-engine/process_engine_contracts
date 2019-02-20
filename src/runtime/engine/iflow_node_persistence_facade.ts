import {Model} from '../../model/index';
import {ProcessToken} from '../types/index';

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
   *                                   Must be optional, because StartEvents don't
   *                                   have one.
   */
  persistOnEnter(
    flowNode: Model.Base.FlowNode,
    flowNodeInstanceId: string,
    processToken: ProcessToken,
    previousFlowNodeInstanceId?: string,
  ): Promise<void>;

  /**
   * Persists the current state of the FlowNodeInstance, after it successfully
   * finished execution.
   *
   * @async
   * @param flowNode           The FlowNodeInstance's Model.
   * @param flowNodeInstanceId The FlowNodeInstance's ID.
   * @param processToken       The current ProcessToken.
   */
  persistOnExit(
    flowNode: Model.Base.FlowNode,
    flowNodeInstanceId: string,
    processToken: ProcessToken,
  ): Promise<void>;

  /**
   * Persists the current state of the FlowNodeInstance, after it was aborted,
   * due to process termination.
   *
   * @async
   * @param flowNode           The FlowNodeInstance's Model.
   * @param flowNodeInstanceId The FlowNodeInstance's ID.
   * @param processToken       The current ProcessToken.
   */
  persistOnTerminate(
    flowNode: Model.Base.FlowNode,
    flowNodeInstanceId: string,
    processToken: ProcessToken,
  ): Promise<void>;

  /**
   * Persists the current state of the FlowNodeInstance, after it encountered
   * an error.
   *
   * @async
   * @param flowNode           The FlowNodeInstance's Model.
   * @param flowNodeInstanceId The FlowNodeInstance's ID.
   * @param processToken       The current ProcessToken.
   * @param error              The error that occured.
   */
  persistOnError(
    flowNode: Model.Base.FlowNode,
    flowNodeInstanceId: string,
    processToken: ProcessToken,
    error: Error,
  ): Promise<void>;

  /**
   * Suspends the execution of the given FlowNodeInstance.
   *
   * @async
   * @param flowNode           The FlowNodeInstance's Model.
   * @param flowNodeInstanceId The FlowNodeInstance's ID.
   * @param processToken       The current ProcessToken.
   */
  persistOnSuspend(
    flowNode: Model.Base.FlowNode,
    flowNodeInstanceId: string,
    processToken: ProcessToken,
  ): Promise<void>;

  /**
   * Resumes execution of the given suspended FlowNodeInstance.
   *
   * @async
   * @param flowNode           The FlowNodeInstance's Model.
   * @param flowNodeInstanceId The FlowNodeInstance's ID.
   * @param processToken       The current ProcessToken.
   */
  persistOnResume(
    flowNode: Model.Base.FlowNode,
    flowNodeInstanceId: string,
    processToken: ProcessToken,
  ): Promise<void>;
}
