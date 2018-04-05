import { OperationReference } from '../../type_references/index';
import { Task } from './index';
import { Invocation } from './invocations/index';

export class ServiceTask extends Task {
  public operationReference: OperationReference;
  public invocation: Invocation;
}
