import {IIdentity} from '@essential-projects/iam_contracts';

import {FlowNode} from '../../model/base';
import {FlowNodeInstanceState, ProcessToken} from '../types';
import {
  IProcessModelFacade,
  IProcessTokenFacade,
  NextFlowNodeInfo,
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
   * Resumes the given FlowNode from the point at which it was interrupted.
   * After execution is done, information about the next FlowNode in line is
   * returned.
   *
   * CAUTION:
   * This is meant to be run by the "ResumeProcessService" ONLY!
   *
   * @async
   * @param   lastFlowNodeInstanceState  Contains the last know state of the
   *                                     FlowNodeInstance before it was
   *                                     interrupted.
   * @param   token                      The current ProcessToken.
   * @param   processTokenFacade         The Facade for the current ProcessToken.
   * @param   processModelFacade         The Facade for the ProcessModel.
   * @param   identity                   Contains the users identity.
   * @param   previousFlowNodeInstanceId The ID of the previously run FNI.
   * @returns                            Info about the next FlowNode to run.
   */
  resume(lastFlowNodeInstanceState: FlowNodeInstanceState,
         token: ProcessToken,
         processTokenFacade: IProcessTokenFacade,
         processModelFacade: IProcessModelFacade,
         identity: IIdentity,
         previousFlowNodeInstanceId?: string,
        ): Promise<NextFlowNodeInfo>;
  /**
   * Executes the given FlowNode.
   * After execution is done, information about the next FlowNode in line is
   * returned.
   *
   * @async
   * @param   token                      The current ProcessToken.
   * @param   processTokenFacade         The Facade for the current ProcessToken.
   * @param   processModelFacade         The Facade for the ProcessModel.
   * @param   identity                   Contains the users identity.
   * @param   previousFlowNodeInstanceId The ID of the previously run FNI.
   * @returns                            Info about the next FlowNode to run.
   */
  execute(token: ProcessToken,
          processTokenFacade: IProcessTokenFacade,
          processModelFacade: IProcessModelFacade,
          identity: IIdentity,
          previousFlowNodeInstanceId?: string,
         ): Promise<NextFlowNodeInfo>;
}
