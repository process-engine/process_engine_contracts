import {ExecutionContext, IEntity} from '@essential-projects/core_contracts';
import {IFeature} from '@essential-projects/feature_contracts';
import {IProcessDefEntity} from './process/index';

export interface ILaneEntity extends IEntity {
  name: string;
  key: string;
  extensions: any;
  processDef: IProcessDefEntity;
  features: Array<IFeature>;
  role: string;
  getProcessDef(context: ExecutionContext): Promise<IProcessDefEntity>;
}
