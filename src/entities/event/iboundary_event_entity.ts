import {INodeInstanceEntity} from '../index';
import {IEventEntity} from './index';

export interface IBoundaryEventEntity extends IEventEntity {
  attachedToInstance: INodeInstanceEntity;
}
