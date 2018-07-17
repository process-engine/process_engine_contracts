import {ExecutionContext, IEntityReference, IPublicGetOptions} from '@essential-projects/core_contracts';
import {IParamStart, IProcessDefEntity} from './entities/process/index';

export interface IProcessDefEntityTypeService {
  start(context: ExecutionContext, param: IParamStart, options?: IPublicGetOptions): Promise<IEntityReference>;
  getProcessDefinitionByKey(context: ExecutionContext,
                            processDefinitionKey: string,
                            version?: string,
                            versionlessFallback?: boolean): Promise<IProcessDefEntity>;
  getProcessDefinitionById(context: ExecutionContext,
                           processDefinitionId: string,
                           version?: string,
                           versionlessFallback?: boolean): Promise<IProcessDefEntity>;
}
