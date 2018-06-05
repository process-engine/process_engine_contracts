import { ExecutionContext } from '@essential-projects/core_contracts';
import { BpmnType, Model } from './../../../index';
import { IExecutionContextFacade, IProcessModelFacade, IProcessTokenFacade } from './index';
import { NextFlowNodeInfo } from './next_flow_node_info';

export interface IFlowNodeHandler<TFlowNode extends Model.Base.FlowNode> {
  execute(flowNode: TFlowNode,
          processTokenFacade: IProcessTokenFacade,
          processModelFacade: IProcessModelFacade,
          executionContextFacade: IExecutionContextFacade): Promise<NextFlowNodeInfo>;
}
