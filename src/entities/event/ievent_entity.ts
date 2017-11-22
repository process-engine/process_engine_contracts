import {INodeInstanceEntity} from '../index';

export interface IEventEntity extends INodeInstanceEntity {
  dispose(): void;
}
