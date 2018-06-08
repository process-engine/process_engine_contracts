import { ProcessInstance } from './process_instance';

export class ProcessToken {
  // header
  public processInstanceId: string;
  public correlationId: string;
  public identity: any;
  public createdAt: Date;
  public flowNodeId: string;
  // payload
  public payload: any;
}
