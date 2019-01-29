import {IIdentity} from '@essential-projects/iam_contracts';

import {FlowNode} from '../../model/base';
import {FlowNodeInstance, ProcessToken} from '../types';
import {
  IProcessModelFacade,
  IProcessTokenFacade,
} from './index';

/**
 * Handles the execution of a single FlowNodeInstance.
 */
export interface IFlowNodeHandler<TFlowNode extends FlowNode> {

  /**
   * Gets the instance ID of the FlowNode that this handler is responsible for.
   *
   * @returns The instance ID of the corresponding FlowNode.
   */
  getInstanceId(): string;

  /**
   * Gets the FlowNode this handler is supposed to execute.
   *
   * @returns The FlowNode for this handler.
   */
  getFlowNode(): TFlowNode;

  /**
   * Resumes the given FlowNodeInstance from the point at which it was
   * interrupted.
   *
   * @async
   * @param   flowNodeInstance   The FlowNodeInstance to resume.
   * @param   processTokenFacade The Facade for the current ProcessToken.
   * @param   processModelFacade The Facade for the ProcessModel.
   * @param   identity           The Identity that started the FlowNodeInstance.
   */
  resume(
    flowNodeInstance: FlowNodeInstance,
    processTokenFacade: IProcessTokenFacade,
    processModelFacade: IProcessModelFacade,
    identity: IIdentity,
  ): Promise<void>;

  /**
   * Executes the FlowNode attached to this handler.
   *
   * @async
   * @param   token                      The current ProcessToken.
   * @param   processTokenFacade         The Facade for the current ProcessToken.
   * @param   processModelFacade         The Facade for the ProcessModel.
   * @param   identity                   Contains the users identity.
   * @param   previousFlowNodeInstanceId The ID of the previously run FNI.
   */
  execute(
    token: ProcessToken,
    processTokenFacade: IProcessTokenFacade,
    processModelFacade: IProcessModelFacade,
    identity: IIdentity,
    previousFlowNodeInstanceId?: string,
    ): Promise<void>;
}
