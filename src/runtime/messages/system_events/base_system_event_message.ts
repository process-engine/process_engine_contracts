import {IIdentity} from '@essential-projects/iam_contracts';

/**
 * The base class for definining system event messages.
 * System events are peripheral events that are not contained within a
 * ProcessModel, but are relevant to its execution.
 *
 * For example: A UserTask was reached or finished.
 */
export class BaseSystemEventMessage {
  public readonly correlationId: string;
  public readonly processModelId: string;
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
