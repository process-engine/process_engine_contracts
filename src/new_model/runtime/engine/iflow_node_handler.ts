import { ExecutionContext } from '@essential-projects/core_contracts';
import { BpmnType, INodeDefEntity, IProcessTokenEntity, Model } from '@process-engine/process_engine_contracts';
import { IExecutionContextFascade, IProcessModelFascade, IProcessTokenFascade } from './index';
import { NextFlowNodeInfo } from './next_flow_node_info';

export interface IFlowNodeHandler<TFlowNode extends Model.Base.FlowNode> {
  execute(flowNode: TFlowNode,
          processTokenFascade: IProcessTokenFascade,
          processModelFascade: IProcessModelFascade,
          executionContextFascade: IExecutionContextFascade): Promise<NextFlowNodeInfo>;
}
