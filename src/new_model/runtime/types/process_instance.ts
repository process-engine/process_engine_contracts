export class ProcessInstance {
  public id: ProcessInstanceId;
  public correlationId: string;
  public processDefinition: Model.Types.Process;
}

export type ProcessInstanceId = string;
