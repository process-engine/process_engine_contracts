import {ExecutionContext, IEntity} from '@essential-projects/core_contracts';
import {IProcessEntity} from './index';

export interface IProcessTokenEntity extends IEntity {
  data: any;
  process: IProcessEntity;
  getProcess(context: ExecutionContext): Promise<IProcessEntity>;
}
