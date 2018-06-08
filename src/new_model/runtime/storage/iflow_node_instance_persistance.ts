import {FlowNodeInstance} from './../types';

export interface IFlowNodeInstancePersistance {
  persistOnEnter(token: any, flowNodeId: string, flowNodeInstanceId: string): Promise<FlowNodeInstance>;
  persistOnExit(token: any, flowNodeId: string, flowNodeInstanceId: string): Promise<FlowNodeInstance>;
  suspend(token: any, flowNodeInstanceId: string, correlationHash?: string): Promise<FlowNodeInstance>;
  resume(flowNodeInstanceId: string): Promise<FlowNodeInstance>;
  queryBy(processInstanceId: string): Promise<Array<FlowNodeInstance>>;
  querySuspended(processInstanceId: string): Promise<Array<FlowNodeInstance>>;
}