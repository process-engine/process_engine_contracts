import {Model} from './../../model';
import {IFlowNodeHandler} from './iflow_node_handler';
import {IProcessModelFacade} from './iprocess_model_facade';
import {NextFlowNodeInfo} from './next_flow_node_info';

export interface IFlowNodeHandlerFactory {
  create<TFlowNode extends Model.Base.FlowNode>(flowNode: NextFlowNodeInfo<TFlowNode>, processModelFascade: IProcessModelFacade): Promise<IFlowNodeHandler<TFlowNode>>;
}
