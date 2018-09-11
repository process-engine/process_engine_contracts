import { UserTaskResult } from '../engine/user_task_result';

export class UserTaskFinishedMessage {
  public correlationId: string;
  public processInstanceId: string;
  public userTaskId: string;
  public userTaskResult: UserTaskResult;
}
