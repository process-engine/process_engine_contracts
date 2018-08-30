import {Model, Runtime} from './../../index';
import {
  IExecutionContextFacade,
  IProcessModelFacade,
  IProcessTokenFacade,
  NextFlowNodeInfo,
} from './index';

export interface IFlowNodeHandler<TFlowNode extends Model.Base.FlowNode> {
  /**
   * Gets the instance ID of the FlowNode that this handler is responsible for.
   *
   * @returns The instance ID of the corresponding FlowNode.
   */
  getInstanceId(): string;
  execute(flowNode: TFlowNode,
          token: Runtime.Types.ProcessToken,
          processTokenFacade: IProcessTokenFacade,
          processModelFacade: IProcessModelFacade,
          executionContextFacade: IExecutionContextFacade): Promise<NextFlowNodeInfo>;
}
