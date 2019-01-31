import {CorrelationState} from './correlation_state';

/**
 * Describes a ProcessInstance within a Correlation.
 */
export class CorrelationProcessInstance {
  public processDefinitionName: string;
  public hash: string;
  public xml: string;
  public processModelId: string;
  public processInstanceId?: string;
  public parentProcessInstanceId?: string;
  public state: CorrelationState;
  public error: Error;
  public createdAt?: Date;
}
