import {ProcessTokenType} from './process_token_type';

/**
 * The process token contains information for each FlowNodeInstance that was
 * executed during a process.
 * Each FlowNodeInstance will produce its own tokens.
 */
export class ProcessToken {
  public flowNodeInstanceId: string;
  public createdAt: Date;
  /**
   * If the token belongs to a Subprocess, this will contain the ID of the
   * parent process.
   *
   * Will be empty, if the process started the correlation.
   */
  public type: ProcessTokenType;
  /**
   * Contains the ProcessToken's values.
   */
  public payload: any;
}
