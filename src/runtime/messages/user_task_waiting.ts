import { UserTaskResult } from '../engine/user_task_result';

export class UserTaskWaitingMessage {
  public correlationId: string;
  public processInstanceId: string;
  public userTaskId: string;
}
