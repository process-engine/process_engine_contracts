import { UserTaskResult } from '../engine/user_task_result';

export enum ProcessEndType {
  Ended = 0,
  Terminated = 1,
}

export class ProcessEndedMessage {
  public correlationId: string;
  public processInstanceId: string;
  public flowNodeId: string;
  public tokenPayload: any;
  public endType: ProcessEndType;
}
