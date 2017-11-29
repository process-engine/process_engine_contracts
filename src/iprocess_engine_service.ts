import {ExecutionContext, IPublicGetOptions} from '@essential-projects/core_contracts';
import {IUserTaskMessageData} from './index';

export interface IProcessEngineService {
  config: any;
  initialize(): Promise<void>;
  start(context: ExecutionContext, data: any, options: IPublicGetOptions): Promise<string>;
  getUserTaskData(context: ExecutionContext, userTaskId: string): Promise<IUserTaskMessageData>;
  executeProcess(context: ExecutionContext, id: string, key: string, initialToken: any, version?: string): Promise<any>;
  createProcessInstance(context: ExecutionContext, processDefinitionId: string, key: string, version?: string): Promise<string>;
  executeProcessInstance(context: ExecutionContext, processInstanceId: string, initialToken: any): Promise<any>;
}