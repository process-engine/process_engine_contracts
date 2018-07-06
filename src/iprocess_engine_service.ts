import {ExecutionContext} from '@essential-projects/core_contracts';
import {
  ExecutionContext as NewExecutionContext,
  IErrorDeserializer,
  IProcessDefEntity,
  IUserTaskMessageData,
} from './index';

export interface IProcessEngineService {
  config: any;
  initialize(): Promise<void>;
  getUserTaskData(context: ExecutionContext, userTaskId: string): Promise<IUserTaskMessageData>;
  executeProcess(context: NewExecutionContext, id: string, key: string, initialToken: any, version?: string): Promise<any>;
  createProcessInstance(context: ExecutionContext, processDefinitionId: string, key: string, version?: string): Promise<string>;
  executeProcessInstance(context: ExecutionContext, processInstanceId: string, participantId: string, initialToken: any): Promise<any>;
  createBpmnFromXml(context: ExecutionContext, xml: string, name: string): Promise<IProcessDefEntity>;
  setErrorDeserializer(deserializer: IErrorDeserializer): void;
}
