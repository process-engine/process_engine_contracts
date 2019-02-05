import {Model} from './../../model';
import {IBoundaryEventHandler} from './iboundary_event_handler';
import {IProcessModelFacade} from './iprocess_model_facade';

/**
 * Creates instances of BoundaryEventHandlers.
 */
export interface IBoundaryEventHandlerFactory {
  /**
   * Returns a new Instance of the BoundaryEventHandler for the given BoundaryEvent.
   *
   * @async
   * @param   flowNode           The BoundaryEvent for which to create a handler.
   * @param   processModelFacade The ProcessModelFacade to use.
   * @returns                    The created BoundaryEventHandler.
   */
  create(flowNode: Model.Events.BoundaryEvent, processModelFacade: IProcessModelFacade): Promise<IBoundaryEventHandler>;
}
