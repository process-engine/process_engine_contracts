import {Model} from './../../model';
import {IFlowNodeHandler} from './iflow_node_handler';
import {IProcessModelFacade} from './iprocess_model_facade';

export interface IFlowNodeHandlerFactory {
  create<TFlowNode extends Model.Base.FlowNode>(flowNode: TFlowNode, processModelFascade: IProcessModelFacade): Promise<IFlowNodeHandler<TFlowNode>>;
}
