/**
 * The message sent when a user task is reached.
 */
export class UserTaskWaitingMessage {
  /**
   * The id of the correlation the waiting user task belongs to.
   */
  public correlationId: string;
  /**
   * The id of the process instance the waiting user task belongs to.
   */
  public processInstanceId: string;
  /**
   * The flow node id of the waiting user task.
   */
  public userTaskId: string;
}
