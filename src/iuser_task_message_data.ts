import {IUserTaskEntity} from './entities/index';

export interface IUserTaskMessageData {
  userTaskEntity: IUserTaskEntity;
  uiName: string;
  uiData: any;
  uiConfig: any;
}
