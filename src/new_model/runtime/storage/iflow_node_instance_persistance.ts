import {FlowNodeInstance, ProcessToken} from './../types';

export interface IFlowNodeInstancePersistance {
  persistOnEnter(token: ProcessToken, flowNodeId: string, flowNodeInstanceId: string): Promise<FlowNodeInstance>;
  persistOnExit(token: ProcessToken, flowNodeId: string, flowNodeInstanceId: string): Promise<FlowNodeInstance>;
  suspend(token: ProcessToken, flowNodeInstanceId: string, correlationHash?: string): Promise<FlowNodeInstance>;
  resume(flowNodeInstanceId: string): Promise<FlowNodeInstance>;
  queryBy(processInstanceId: string): Promise<Array<FlowNodeInstance>>;
  querySuspended(processInstanceId: string): Promise<Array<FlowNodeInstance>>;
}