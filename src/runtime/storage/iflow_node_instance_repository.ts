import {FlowNodeInstance, FlowNodeInstanceState, ProcessToken} from './../types';

export interface IFlowNodeInstanceRepository {
  persistOnEnter(flowNodeId: string, flowNodeInstanceId: string, token: ProcessToken): Promise<FlowNodeInstance>;
  persistOnExit(flowNodeId: string, flowNodeInstanceId: string, token: ProcessToken): Promise<FlowNodeInstance>;
  persistOnError(flowNodeId: string, flowNodeInstanceId: string, token: ProcessToken, error: Error): Promise<FlowNodeInstance>;
  persistOnTerminate(flowNodeId: string, flowNodeInstanceId: string, token: ProcessToken): Promise<FlowNodeInstance>;
  suspend(flowNodeId: string, flowNodeInstanceId: string, token: ProcessToken): Promise<FlowNodeInstance>;
  resume(flowNodeId: string, flowNodeInstanceId: string, token: ProcessToken): Promise<FlowNodeInstance>;
  queryByFlowNodeId(flowNodeId: string): Promise<FlowNodeInstance>;
  queryByInstanceId(flowNodeInstanceId: string): Promise<FlowNodeInstance>;
  queryByState(state: FlowNodeInstanceState): Promise<Array<FlowNodeInstance>>;
  queryByCorrelation(correlationId: string): Promise<Array<FlowNodeInstance>>;
  queryByProcessModel(processModelId: string): Promise<Array<FlowNodeInstance>>;
  querySuspendedByProcessModel(processModelId: string): Promise<Array<FlowNodeInstance>>;
  querySuspendedByCorrelation(processInstanceId: string): Promise<Array<FlowNodeInstance>>;
  queryProcessTokensByProcessInstance(processInstanceId: string): Promise<Array<ProcessToken>>;
}
