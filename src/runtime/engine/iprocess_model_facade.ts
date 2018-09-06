import {Model} from './../../model';

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
  getStartEvents(): Array<Model.Events.StartEvent>;

  /**
   * Gets a StartEvent by its ID.
   *
   * @param startEventId The ID of the StartEvent to get.
   * @returns            The retrieved StartEvent.
   */
  getStartEventById(startEventId: string): Model.Events.StartEvent;

  /**
   * Gets all the ProcessModels EndEvents.
   *
   * @returns A list of EndEvents.
   */
  getEndEvents(): Array<Model.Events.EndEvent>;

  /**
   * Gets all the ProcessModels UserTask.
   *
   * @returns A list of UserTask.
   */
  getUserTasks(): Array<Model.Activities.UserTask>;

  /**
   * Gets a FlowNode by its ID.
   *
   * @param flowNodeId The ID of the FlowNode to get.
   * @returns          The retrieved FlowNode.
   */
  getFlowNodeById(flowNodeId: string): Model.Base.FlowNode;

  /**
   * Returns a list of all incoming SequenceFlows connected to the FlowNode
   * with the given ID.
   *
   * @param flowNodeId The ID of the FlowNode for which to get the incoming
   *                   SequenceFlows.
   * @returns          The retrieved SequenceFlows.
   */
  getIncomingSequenceFlowsFor(flowNodeId: string): Array<Model.Types.SequenceFlow>;

  /**
   * Returns a list of all outgoing SequenceFlows connected to the FlowNode
   * with the given ID.
   *
   * @param flowNodeId The ID of the FlowNode for which to get the outgoing
   *                   SequenceFlows.
   * @returns          The retrieved SequenceFlows.
   */
  getOutgoingSequenceFlowsFor(flowNodeId: string): Array<Model.Types.SequenceFlow>;

  /**
   * Gets the FlowNode to run after the given FlowNode has finished execution.
   *
   * @param flowNodeId The FlowNode for which to get the succeeding FlowNode.
   * @returns          The upcoming FlowNode.
   */
  getNextFlowNodeFor(flowNode: Model.Base.FlowNode): Model.Base.FlowNode;

  /**
   * Gets all BoundaryEvents for the given FlowNode.
   *
   * @param flowNodeId The FlowNode for which to get the BoundaryEvents.
   * @returns          The retrieved BoundaryEvents.
   */
  getBoundaryEventsFor(flowNode: Model.Base.FlowNode): Array<Model.Events.BoundaryEvent>;

  /**
   * Gets the corresponding Join-Gateway for the given ParallelSplitGateway.
   *
   * @param parallelSplitGateway The gateway for which to get the JoinGateway.
   * @returns                    The retrieved ParallelJoinGateway.
   */
  getJoinGatewayFor(parallelSplitGateway: Model.Gateways.ParallelGateway): Model.Gateways.ParallelGateway; // TODO: Rename to getParallelJoinGatewayFor

  /**
   * Gets the SequenceFlow that links two FlowNodes together.
   *
   * @param flowNodeId   The first FlowNode.
   * @param nextFlowNode The second FlowNode.
   * @returns            The retrieved SequenceFlow.
   */
  getSequenceFlowBetween(flowNode: Model.Base.FlowNode, nextFlowNode: Model.Base.FlowNode): Model.Types.SequenceFlow;

  /**
   * Creates a ProcessModelFacade for the given SubProcess.
   *
   * @param subProcess The SubProcess for which to create a Facade.
   * @returns          The created ProcessModelFacade.
   */
  getSubProcessModelFacade(subProcess: Model.Activities.SubProcess): IProcessModelFacade;
}
