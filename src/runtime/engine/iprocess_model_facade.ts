import {Model} from './../../model';

export interface IProcessModelFacade {
  getIsExecutable(): boolean;
  getStartEvents(): Array<Model.Events.StartEvent>;
  getStartEventById(startEventId: string): Model.Events.StartEvent;
  getEndEvents(): Array<Model.Events.EndEvent>;
  getUserTasks(): Array<Model.Activities.UserTask>;
  getFlowNodeById(flowNodeId: string): Model.Base.FlowNode;
  getIncomingSequenceFlowsFor(flowNodeId: string): Array<Model.Types.SequenceFlow>;
  getOutgoingSequenceFlowsFor(flowNodeId: string): Array<Model.Types.SequenceFlow>;
  getNextFlowNodeFor(flowNode: Model.Base.FlowNode): Model.Base.FlowNode;
  getBoundaryEventsFor(flowNode: Model.Base.FlowNode): Array<Model.Events.BoundaryEvent>;
  getJoinGatewayFor(parallelGatewayNode: Model.Gateways.ParallelGateway): Model.Gateways.ParallelGateway;
  getSequenceFlowBetween(flowNode: Model.Base.FlowNode, nextFlowNode: Model.Base.FlowNode): Model.Types.SequenceFlow;
  getSubProcessModelFacade(subProcessNode: Model.Activities.SubProcess): IProcessModelFacade;
}