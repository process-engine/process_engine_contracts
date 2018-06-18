import { ProcessInstance } from './process_instance';

export class ProcessToken {
  // header
  public processInstanceId: string;
  public processModelId: string; // TODO: make use of this in queries
  public correlationId: string;
  public identity: any;
  public createdAt: Date;
  // payload
  public payload: any;
}
