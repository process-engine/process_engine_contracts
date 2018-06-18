import { ExecutionContext } from '@essential-projects/core_contracts';
import { BpmnType, Model, Runtime } from './../../../index';
import { IExecutionContextFacade, IProcessModelFacade, IProcessTokenFacade, NextFlowNodeInfo } from './index';

export interface IFlowNodeHandler<TFlowNode extends Model.Base.FlowNode> {
  execute(flowNode: TFlowNode,
          token: Runtime.Types.ProcessToken,
          processTokenFacade: IProcessTokenFacade,
          processModelFacade: IProcessModelFacade,
          executionContextFacade: IExecutionContextFacade): Promise<NextFlowNodeInfo>;
}
