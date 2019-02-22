import {BoundaryEvent, EndEvent, FlowNode, IntermediateCatchEvent, SequenceFlow, StartEvent, SubProcess} from './../../model_duplications/index';

/**
 * The ProcessModelFacade allows to run queries for a certain ProcessModel,
 * without having to touch the ProcessModel itself or making async queries
 * against the repository.
 */
export interface IProcessModelFacade {

  /**
   * Checks if the ProcessModel is marked as executable.
   *
   * @returns 'True' if it is executable, otherwise 'false'.
   */
  getIsExecutable(): boolean;

  /**
   * Gets all the ProcessModels StartEvents.
   *
   * @returns A list of StartEvents.
   */
  getStartEvents(): Array<StartEvent>;

  /**
   * Gets a single StartEvent, if the process does not contain more
   * than one StartEvent.
   *
   * @returns The only StartEvent of the Process
   * @throws {BadRequestError} If the Process contains more than one StartEvent.
   */
  getSingleStartEvent(): Model.Events.StartEvent;

  /**
   * Gets a StartEvent by its ID.
   *
   * @param startEventId The ID of the StartEvent to get.
   * @returns            The retrieved StartEvent.
   */
  getStartEventById(startEventId: string): StartEvent;

  /**
   * Gets all the ProcessModels EndEvents.
   *
   * @returns A list of EndEvents.
   */
  getEndEvents(): Array<EndEvent>;

  /**
   * Gets a FlowNode by its ID.
   *
   * @param flowNodeId The ID of the FlowNode to get.
   * @returns          The retrieved FlowNode.
   */
  getFlowNodeById(flowNodeId: string): FlowNode;

  /**
   * Returns a list of all incoming SequenceFlows connected to the FlowNode
   * with the given ID.
   *
   * @param flowNodeId The ID of the FlowNode for which to get the incoming
   *                   SequenceFlows.
   * @returns          The retrieved SequenceFlows.
   */
  getIncomingSequenceFlowsFor(flowNodeId: string): Array<SequenceFlow>;

  /**
   * Returns a list of all outgoing SequenceFlows connected to the FlowNode
   * with the given ID.
   *
   * @param flowNodeId The ID of the FlowNode for which to get the outgoing
   *                   SequenceFlows.
   * @returns          The retrieved SequenceFlows.
   */
  getOutgoingSequenceFlowsFor(flowNodeId: string): Array<SequenceFlow>;

  /**
   * Gets the FlowNodes to run after the given FlowNode has finished execution.
   * This should only return multiple results, when dealing with a Gateway.
   * Otherwise, the model is invalid.
   *
   * @param flowNodeId The FlowNode for which to get the succeeding FlowNodes.
   * @returns          The upcoming FlowNodes.
   */
  getNextFlowNodesFor(flowNode: FlowNode): Array<FlowNode>;

  /**
   * Gets the FlowNodes that preceeded the given FlowNode.
   * Can contain multiple results for all FlowNode types.
   *
   * @param flowNodeId The FlowNode for which to get the preceeding FlowNodes.
   * @returns          The preceeding FlowNodes.
   */
  getPreviousFlowNodesFor(flowNode: FlowNode): Array<FlowNode>;

  /**
   * Gets all BoundaryEvents for the given FlowNode.
   *
   * @param flowNodeId The FlowNode for which to get the BoundaryEvents.
   * @returns          The retrieved BoundaryEvents.
   */
  getBoundaryEventsFor(flowNode: FlowNode): Array<BoundaryEvent>;

  /**
   * Returns the IntermediateLinkCatchEvents with the given link name.
   *
   * @param   linkName The name of the link for which to retrieve the
   *                   corresponding CatchEvents.
   * @returns          The IntermediateLinkCatchEvents that handle the given
   *                   link.
   */
  getLinkCatchEventsByLinkName(linkName: string): Array<IntermediateCatchEvent>;

  /**
   * Gets the SequenceFlow that links two FlowNodes together.
   *
   * @param flowNodeId   The first FlowNode.
   * @param nextFlowNode The second FlowNode.
   * @returns            The retrieved SequenceFlow.
   */
  getSequenceFlowBetween(flowNode: FlowNode, nextFlowNode: FlowNode): SequenceFlow;

  /**
   * Creates a ProcessModelFacade for the given SubProcess.
   *
   * @param subProcess The SubProcess for which to create a Facade.
   * @returns          The created ProcessModelFacade.
   */
  getSubProcessModelFacade(subProcess: SubProcess): IProcessModelFacade;
}
