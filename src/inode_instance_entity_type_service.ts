import {ExecutionContext, IEntity, IPublicGetOptions} from '@essential-projects/core_contracts';
import {IEntityType} from '@essential-projects/data_model_contracts';
import {BpmnType} from './constants';
import {INodeInstanceEntity} from './entities';
import {IParamsContinueFromRemote} from './index';

export interface INodeInstanceEntityTypeService {
  subscibeToNodeChannels(node: INodeInstanceEntity): INodeInstanceEntity;
  getEntityTypeFromBpmnType<TEntity extends IEntity = IEntity>(bpmnType: BpmnType): Promise<IEntityType<TEntity>>;
  createNode(context: ExecutionContext, entityType: IEntityType<IEntity>): Promise<IEntity>;
  createNextNode(context: ExecutionContext, source: any, nextDef: any, token: any): Promise<IEntity>;
  continueExecution(context: ExecutionContext, nodeInstance: IEntity): Promise<void>;
  continueFromRemote(context: ExecutionContext, params: IParamsContinueFromRemote, options?: IPublicGetOptions): Promise<void>;
  continueTask(context: ExecutionContext, nodeInstanceEntity: INodeInstanceEntity): void;
}
