import { ProcessEndType } from "../types/process_end_type";

/**
 * The message sent when a process ends.
 */
export class ProcessEndedMessage {
  /**
   * The id of the correlation the process belongs to.
   */
  public correlationId: string;
  /**
   * The id of the process instance being ended.
   */
  public processInstanceId: string;
  /**
   * The id of the flow node that ended the process.
   */
  public flowNodeId: string;
  /**
   * The current token the process was ended with.
   */
  public tokenPayload: any;
  /**
   * The type determining whether or not the process ended gracefully.
   */
  public endType: ProcessEndType;
}
