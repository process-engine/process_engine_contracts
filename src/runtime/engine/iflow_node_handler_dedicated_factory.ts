import {Model} from './../../model';
import {ProcessToken} from './../../runtime/types';
import {IFlowNodeHandler} from './iflow_node_handler';
import {IProcessModelFacade} from './iprocess_model_facade';

/**
 * Creates instances of a FlowNodeHandler for a specific FlowNode type.
 *
 * This is currently used for ServiceTasks, ParallelGateways and IntermediateEvents,
 * which use multiple handlers.
 */
export interface IFlowNodeHandlerDedicatedFactory<TFlowNode extends Model.Base.FlowNode> {

  /**
   * Returns a new Instance of the FlowNodeHandler for the given FlowNode.
   *
   * @async
   * @param   flowNode           The FlowNode for which to create a handler.
   * @param   processModelFacade Optional: A ProcessModelFacade to use.
   * @param   processToken       Optional: The current ProcessToken.
   *                             This can be used to store unique instances
   *                             of a handler.
   * @returns                    The created FlowNodeHandler.
   */
  create(
    flowNode: TFlowNode,
    processModelFacade?: IProcessModelFacade,
    processToken?: ProcessToken,
  ): Promise<IFlowNodeHandler<TFlowNode>>;
}
