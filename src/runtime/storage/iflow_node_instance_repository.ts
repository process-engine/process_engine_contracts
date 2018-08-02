import {FlowNodeInstance, FlowNodeInstanceState, ProcessToken} from './../types';

export interface IFlowNodeInstanceRepository {
  persistOnEnter(token: ProcessToken, flowNodeId: string, flowNodeInstanceId: string): Promise<FlowNodeInstance>;
  persistOnExit(token: ProcessToken, flowNodeId: string, flowNodeInstanceId: string): Promise<FlowNodeInstance>;
  persistOnError(token: ProcessToken, flowNodeId: string, flowNodeInstanceId: string, error: Error): Promise<FlowNodeInstance>;
  suspend(token: ProcessToken, flowNodeInstanceId: string, correlationHash?: string): Promise<FlowNodeInstance>;
  resume(flowNodeInstanceId: string): Promise<FlowNodeInstance>;
  queryByState(state: FlowNodeInstanceState): Promise<Array<FlowNodeInstance>>;
  queryByCorrelation(correlationId: string): Promise<Array<FlowNodeInstance>>;
  queryByProcessModel(processModelId: string): Promise<Array<FlowNodeInstance>>;
  querySuspendedByProcessModel(processModelId: string): Promise<Array<FlowNodeInstance>>;
  querySuspendedByCorrelation(processInstanceId: string): Promise<Array<FlowNodeInstance>>;
}
