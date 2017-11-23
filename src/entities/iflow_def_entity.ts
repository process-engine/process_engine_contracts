import {ExecutionContext, IEntity} from '@essential-projects/core_contracts';
import {IFeature} from '@essential-projects/feature_contracts';
import {INodeDefEntity} from './index';
import {IProcessDefEntity} from './process/index';

export interface IFlowDefEntity extends IEntity {
  name: string;
  key: string;
  processDef: IProcessDefEntity;
  source: INodeDefEntity;
  target: INodeDefEntity;
  condition: string;
  getProcessDef(context: ExecutionContext): Promise<IProcessDefEntity>;
  getSource(context: ExecutionContext): Promise<INodeDefEntity>;
  getTarget(context: ExecutionContext): Promise<INodeDefEntity>;
}
