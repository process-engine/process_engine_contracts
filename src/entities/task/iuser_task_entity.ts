import {ExecutionContext} from '@essential-projects/core_contracts';
import {IUserTaskMessageData} from '../../index';
import {INodeInstanceEntity} from '../index';

export interface IUserTaskEntity extends INodeInstanceEntity {
  getUserTaskData(context: ExecutionContext): Promise<IUserTaskMessageData>;
}
