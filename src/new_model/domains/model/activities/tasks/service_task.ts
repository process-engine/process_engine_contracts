import { OperationReference } from '../../type_references/index';
import { Invocation } from './invocations/index';
import { Task } from './task';
import { BpmnType } from '../../../../../constants';

export class ServiceTask extends Task {
  public get bpmnType(): BpmnType {
    return BpmnType.serviceTask;
  }
  public operationReference: OperationReference;
  public invocation: Invocation;
}
