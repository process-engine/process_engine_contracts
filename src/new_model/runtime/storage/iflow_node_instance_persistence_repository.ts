import {FlowNodeInstance, ProcessToken} from './../types';

export interface IFlowNodeInstancePersistenceRepository {
  persistOnEnter(token: ProcessToken, flowNodeId: string, flowNodeInstanceId: string): Promise<FlowNodeInstance>;
  persistOnExit(token: ProcessToken, flowNodeId: string, flowNodeInstanceId: string): Promise<FlowNodeInstance>;
  suspend(token: ProcessToken, flowNodeInstanceId: string, correlationHash?: string): Promise<FlowNodeInstance>;
  resume(flowNodeInstanceId: string): Promise<FlowNodeInstance>;
  queryByCorrelation(correlationId: string): Promise<Array<FlowNodeInstance>>;
  queryByProcessModel(processModelId: string): Promise<Array<FlowNodeInstance>>;
  querySuspendedByProcessModel(processModelId: string): Promise<Array<FlowNodeInstance>>;
  querySuspendedByCorrelation(processInstanceId: string): Promise<Array<FlowNodeInstance>>;
}
