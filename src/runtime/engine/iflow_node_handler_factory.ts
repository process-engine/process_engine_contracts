import {Model} from './../../model';
import {ProcessToken} from './../../runtime/types';
import {IFlowNodeHandler} from './iflow_node_handler';

/**
 * Creates instances of the FlowNodeHandler.
 */
export interface IFlowNodeHandlerFactory {
  /**
   * Returns a new Instance of the FlowNodeHandler for the given FlowNode and ProcessModelFacade.
   *
   * @async
   * @param   flowNode     The FlowNode for which to create a handler.
   * @param   processToken Optional: The current ProcessToken.
   * @returns              The created FlowNodeHandler.
   */
  create<TFlowNode extends Model.Base.FlowNode>(flowNode: TFlowNode, processToken?: ProcessToken): Promise<IFlowNodeHandler<TFlowNode>>;
}
