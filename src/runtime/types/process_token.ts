import {IIdentity} from '@essential-projects/iam_contracts';

export class ProcessToken {
  // header
  public processInstanceId: string;
  public processModelId: string;
  public correlationId: string;
  public identity: IIdentity;
  public createdAt: Date;
  public caller: string; // empty if this started the correlation
  // payload
  public payload: any;
}
