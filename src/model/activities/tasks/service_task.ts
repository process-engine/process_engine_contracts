import {BpmnType} from '../../../constants';
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
  /**
   * The invocation to be used when the ServiceTask is called.
   */
  public invocation: Invocation;
  /**
   * The ServiceTasks type.
   * Currently only supports 'external' and 'internal'.
   */
  public type?: ServiceTaskType;
  /**
   * The topic to use in conjunction with external ServiceTasks.
   */
  public topic?: string;
}

/**
 * Describes all currently supported ServiceTask types.
 */
export enum ServiceTaskType {
  external = 'external',
  internal = 'internal',
}
