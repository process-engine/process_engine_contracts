import {BpmnType} from '../../../constants';
import {OperationReference} from '../../type_references/index';
import {Invocation} from './invocations/index';
import {Task} from './task';

/**
 * Describes a BPMN ServiceTask.
 * A service task is used to call either a function from a specific class,
 * or for performing web requests.
 */
export class ServiceTask extends Task {
  public get bpmnType(): BpmnType {
    return BpmnType.serviceTask;
  }
  public operationReference: OperationReference; // TODO: Not used anywhere - do we still need this?
  /**
   * The invocation to be used when the ServiceTask is called.
   */
  public invocation: Invocation;
}
