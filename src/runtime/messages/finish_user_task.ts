import { UserTaskResult } from '../engine/user_task_result';

export class FinishUserTaskMessage {
  public correlationId: string;
  public processInstanceId: string;
  public userTaskId: string;
  public result: any;
}
