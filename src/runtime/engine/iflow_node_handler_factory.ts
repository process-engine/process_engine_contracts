import {Model} from './../../model';
import {ProcessToken} from './../../runtime/types';
import {IBoundaryEventHandler} from './iboundary_event_handler';
import {IFlowNodeHandler} from './iflow_node_handler';

/**
 * Creates instances of the FlowNodeHandler.
 */
export interface IFlowNodeHandlerFactory {

  /**
   * Returns a new Instance of the FlowNodeHandler for the given FlowNode.
   *
   * @async
   * @param   flowNode     The FlowNode for which to create a handler.
   * @param   processToken Optional: The current ProcessToken.
   * @returns              The created FlowNodeHandler.
   */
  create<TFlowNode extends Model.Base.FlowNode>(flowNode: TFlowNode, processToken?: ProcessToken): Promise<IFlowNodeHandler<TFlowNode>>;

  /**
   * Returns a new Instance of a handler for the given BoundaryEvent.
   * BoundaryEvents work differently from the the other FlowNodes, therefore
   * they are handled separately.
   *
   * @async
   * @param   flowNode The BoundaryEvent for which to create a handler.
   * @returns          The created BoundaryEventHandler.
   */
  createForBoundaryEvent(flowNode: Model.Events.BoundaryEvent): Promise<IBoundaryEventHandler>;
}
