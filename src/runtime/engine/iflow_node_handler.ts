import {Model, Runtime} from './../../index';
import {
  IExecutionContextFacade,
  IProcessModelFacade,
  IProcessTokenFacade,
  NextFlowNodeInfo,
} from './index';

/**
 * Handles the execution of a single FlowNodeInstance.
 */
export interface IFlowNodeHandler<TFlowNode extends Model.Base.FlowNode> {
  /**
   * Gets the instance ID of the FlowNode that this handler is responsible for.
   *
   * @returns The instance ID of the corresponding FlowNode.
   */
  getInstanceId(): string;
  /**
   * Executes the given FlowNode.
   * After execution is done, information about the next FlowNode in line is
   * returned.
   *
   * @async
   * @param   flowNode               The FlowNode to execute.
   * @param   token                  The current ProcessToken.
   * @param   processTokenFacade     The Facade for the current ProcessToken.
   * @param   processModelFacade     The Facade for the ProcessModel.
   * @param   executionContextFacade Contains the users identity.
   * @returns                        Information about the next FlowNode to run.
   */
  execute(flowNode: TFlowNode,
          token: Runtime.Types.ProcessToken,
          processTokenFacade: IProcessTokenFacade,
          processModelFacade: IProcessModelFacade,
          executionContextFacade: IExecutionContextFacade): Promise<NextFlowNodeInfo>;
}
