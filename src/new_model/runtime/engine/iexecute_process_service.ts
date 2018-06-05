import { ExecutionContext } from '@essential-projects/core_contracts';
import { Model } from './../../model';

export interface IExecuteProcessService {
  start(context: ExecutionContext, processDefinition: Model.Types.Process, initialToken?: any): Promise<void>;
}
