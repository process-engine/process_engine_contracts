import {IExecutionContextFacade} from '../engine/index';
import {FlowNodeInstance, ProcessToken} from '../types/index';

export interface IFlowNodeInstanceService {
  persistOnEnter(executionContextFacade: IExecutionContextFacade,
                 token: ProcessToken,
                 flowNodeId: string,
                 flowNodeInstanceId: string,
                ): Promise<FlowNodeInstance>;
  persistOnExit(executionContextFacade: IExecutionContextFacade,
                token: ProcessToken,
                flowNodeId: string,
                flowNodeInstanceId: string,
               ): Promise<FlowNodeInstance>;
  persistOnError(executionContextFacade: IExecutionContextFacade,
                 token: ProcessToken,
                 flowNodeId: string,
                 flowNodeInstanceId: string,
                 error: Error,
                ): Promise<FlowNodeInstance>;
  persistOnTerminate(executionContextFacade: IExecutionContextFacade,
                     token: ProcessToken,
                     flowNodeId: string,
                     flowNodeInstanceId: string,
                    ): Promise<FlowNodeInstance>;
  suspend(executionContextFacade: IExecutionContextFacade,
          token: ProcessToken,
          flowNodeInstanceId: string,
          correlationHash?: string,
         ): Promise<FlowNodeInstance>;
  resume(executionContextFacade: IExecutionContextFacade, flowNodeInstanceId: string): Promise<FlowNodeInstance>;
  queryByCorrelation(executionContextFacade: IExecutionContextFacade, correlationId: string): Promise<Array<FlowNodeInstance>>;
  queryByProcessModel(executionContextFacade: IExecutionContextFacade, processModelId: string): Promise<Array<FlowNodeInstance>>;
  querySuspendedByProcessModel(executionContextFacade: IExecutionContextFacade, processModelId: string): Promise<Array<FlowNodeInstance>>;
  querySuspendedByCorrelation(executionContextFacade: IExecutionContextFacade, processInstanceId: string): Promise<Array<FlowNodeInstance>>;
  queryProcessTokensByProcessInstance(processInstanceId: string): Promise<Array<ProcessToken>>;
  getFlowNodeInstanceById(flowNodeInstanceId: string): Promise<FlowNodeInstance>;
}
