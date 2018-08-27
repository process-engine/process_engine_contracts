import {FlowNodeInstance, ProcessToken} from '../types/index';

export interface IFlowNodeInstanceService {
  persistOnEnter(flowNodeId: string, flowNodeInstanceId: string, token: ProcessToken): Promise<FlowNodeInstance>;
  persistOnExit(flowNodeId: string, flowNodeInstanceId: string, token: ProcessToken): Promise<FlowNodeInstance>;
  persistOnError(flowNodeId: string, flowNodeInstanceId: string, token: ProcessToken, error: Error): Promise<FlowNodeInstance>;
  persistOnTerminate(flowNodeId: string, flowNodeInstanceId: string, token: ProcessToken): Promise<FlowNodeInstance>;
  suspend(flowNodeId: string, flowNodeInstanceId: string, token: ProcessToken): Promise<FlowNodeInstance>;
  resume(flowNodeId: string, flowNodeInstanceId: string, token: ProcessToken): Promise<FlowNodeInstance>;
  queryByInstanceId(flowNodeInstanceId: string): Promise<FlowNodeInstance>;
  queryByCorrelation(correlationId: string): Promise<Array<FlowNodeInstance>>;
  queryByProcessModel(processModelId: string): Promise<Array<FlowNodeInstance>>;
  querySuspendedByProcessModel(processModelId: string): Promise<Array<FlowNodeInstance>>;
  querySuspendedByCorrelation(processInstanceId: string): Promise<Array<FlowNodeInstance>>;
  queryProcessTokensByProcessInstanceId(processInstanceId: string): Promise<Array<ProcessToken>>;
}
