import { OperationReference } from '../../type_references/index';
import { Invocation } from './invocations/index';
import { Task } from './task';

export class ServiceTask extends Task {
  public operationReference: OperationReference;
  public invocation: Invocation;
}
