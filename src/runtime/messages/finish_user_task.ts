/**
 * The message used to finish a waiting user task.
 */
export class FinishUserTaskMessage {
  /**
   * The id of the correlation the user task being finished belongs to.
   */
  public correlationId: string;
  /**
   * The id of the process instance the user task being finished belongs to.
   */
  public processInstanceId: string;
  /**
   * The flow node id of the user task being finished.
   */
  public userTaskId: string;
  /**
   * The result the user task should be finished with.
   */
  public result: any;
}
