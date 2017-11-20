import {ExecutionContext, IEntity, IEntityReference, IPublicGetOptions} from '@essential-projects/core_contracts';
import {IEntityCollection, IEntityType} from '@essential-projects/data_model_contracts';
import {IFeature} from '@essential-projects/feature_contracts';
import {IFlowDefEntity, ILaneEntity, INodeDefEntity} from '../index';
import {IParamStart, IParamUpdateDefs, IProcessDefEntity} from './index';

export interface IProcessDefEntity extends IEntity {
  name: string;
  key: string;
  defId: string;
  xml: string;
  internalName: string;
  path: string;
  category: string;
  module: string;
  readonly: boolean;
  version: string;
  counter: number;
  draft: boolean;
  latest: boolean;
  nodeDefCollection: IEntityCollection<INodeDefEntity>;
  flowDefCollection: IEntityCollection<IFlowDefEntity>;
  laneCollection: IEntityCollection<ILaneEntity>;
  features: Array<IFeature>;
  extensions: any;
  persist: boolean;
  getNodeDefCollection(context: ExecutionContext): Promise<IEntityCollection<INodeDefEntity>>;
  getFlowDefCollection(context: ExecutionContext): Promise<IEntityCollection<IFlowDefEntity>>;
  getLaneCollection(context: ExecutionContext): Promise<IEntityCollection<ILaneEntity>>;
  start(context: ExecutionContext, params: IParamStart, options?: IPublicGetOptions): Promise<IEntityReference>;
  updateDefinitions(context: ExecutionContext, params?: IParamUpdateDefs): Promise<void>;
  updateBpmn(context: ExecutionContext, xml: string): Promise<any>;
  getDraft(context: ExecutionContext): Promise<IProcessDefEntity>;
  getLatest(context: ExecutionContext): Promise<IProcessDefEntity>;
  publishDraft(context: ExecutionContext): Promise<IProcessDefEntity>;
}
