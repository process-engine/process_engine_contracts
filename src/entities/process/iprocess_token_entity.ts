import {ExecutionContext, IEntity} from '@essential-projects/core_contracts';
import {IProcessEntity} from './index';

export interface IProcessTokenEntity extends IEntity {
  data: any;
  process: IProcessEntity;
  parentProcessToken: IProcessTokenEntity;
  getProcess(context: ExecutionContext): Promise<IProcessEntity>;
  getParentProcessToken(context: ExecutionContext): Promise<IProcessTokenEntity>;
  clone(): Promise<IProcessTokenEntity>;
}
