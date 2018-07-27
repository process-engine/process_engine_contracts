import {IIdentity} from '@essential-projects/iam_contracts';

/**
 * The process token contains information for each flow node instance that was executed during a process.
 * Each flow node instance will produce its own token. No token is ever shared.
 */
export class ProcessToken {
  /**
   * The id of the process instance the token belongs to.
   */
  public processInstanceId: string;
  /**
   * The id of the process model the token belongs to.
   */
  public processModelId: string;
  /**
   * The id of the correlation the token belongs to.
   */
  public correlationId: string;
  /**
   * The identity of the executing user.
   */
  public identity: IIdentity;
  /**
   * The date and time at which the token was created.
   */
  public createdAt: Date;
  /**
   * If the token belongs to a subprocess, this will contain the id of the calling process.
   */
  public caller: string;
  /**
   * The payload of the process token. This describes the flow node instances result.
   */
  public payload: any;
}
