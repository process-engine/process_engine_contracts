import { UserTaskResult } from '../engine/user_task_result';

/**
 * The message sent when a user task has been finished.
 */
export class UserTaskFinishedMessage {
  /**
   * The id of the correlation the finished user task belongs to.
   */
  public correlationId: string;
  /**
   * The id of the process instance the finished user task belongs to.
   */
  public processInstanceId: string;
  /**
   * The flow node id of the finished user task.
   */
  public userTaskId: string;
  /**
   * The result the user task was finished with.
   */
  public userTaskResult: UserTaskResult;
}
