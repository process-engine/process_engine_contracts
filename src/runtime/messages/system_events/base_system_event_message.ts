import {IIdentity} from '@essential-projects/iam_contracts';

export class BaseSystemEventMessage {
  /**
   * The id of the correlation the user task being finished belongs to.
   */
  public readonly correlationId: string;
  public readonly processModelId: string;
  /**
   * The id of the process instance the user task being finished belongs to.
   */
  public readonly processInstanceId: string;
  public readonly flowNodeId: string;
  public readonly flowNodeInstanceId: string;
  public readonly identity: IIdentity;
  public readonly currentToken: any;

  constructor(correlationId: string,
              processModelId: string,
              processInstanceId: string,
              flowNodeId: string,
              flowNodeInstanceId: string,
              identity: IIdentity,
              currentToken: any) {
    this.correlationId = correlationId;
    this.processModelId = processModelId;
    this.processInstanceId = processInstanceId;
    this.flowNodeId = flowNodeId;
    this.flowNodeInstanceId = flowNodeInstanceId;
    this.identity = identity;
    this.currentToken = currentToken;
  }
}
