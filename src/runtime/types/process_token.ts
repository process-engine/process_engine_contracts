import {IIdentity} from '@essential-projects/iam_contracts';
import {ProcessTokenType} from './process_token_type';

/**
 * The process token contains information for each FlowNodeInstance that was
 * executed during a process.
 * Each FlowNodeInstance will produce its own tokens. No token is ever shared.
 */
export class ProcessToken {
  public processInstanceId: string;
  public processModelId: string;
  public correlationId: string;
  public flowNodeInstanceId: string;
  public identity: IIdentity;
  public createdAt: Date;
  public caller: string; // empty if this started the correlation
  public type: ProcessTokenType;
  // payload
  public payload: any;
}
