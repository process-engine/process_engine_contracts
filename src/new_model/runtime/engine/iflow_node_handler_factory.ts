import { Model } from './../../model';
import { IFlowNodeHandler } from './iflow_node_handler';
import { IProcessModelFascade } from './iprocess_model_fascade';

export interface IFlowNodeHandlerFactory {
  create<TFlowNode extends Model.Base.FlowNode>(flowNode: TFlowNode, processModelFascade: IProcessModelFascade): Promise<IFlowNodeHandler<TFlowNode>>;
}