import {ExecutionContext, IEntity, IPublicGetOptions} from '@essential-projects/core_contracts';
import {IParamStart, IProcessDefEntity} from './index';

export interface IProcessEntity extends IEntity {
  name: string;
  key: string;
  status: string;
  processDef: IProcessDefEntity;
  activeInstances: any;
  allInstances: any;
  boundProcesses: any;
  getProcessDef(context: ExecutionContext): Promise<IProcessDefEntity>;
  initializeProcess(): Promise<void>;
  start(context: ExecutionContext, params: IParamStart, options?: IPublicGetOptions): Promise<void>;
  end(context: ExecutionContext, processToken: any, endEventKey?: string): Promise<void>;
  error(context: ExecutionContext, error: any): Promise<void>;
  addActiveInstance(entity: IEntity): void;
  removeActiveInstance(entity: IEntity): void;
}
