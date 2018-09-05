import {BpmnType} from '../../../constants';
import {FormField} from '../../types';
import {Task} from './task';

/**
 * Describes a BPMN UserTask.
 *
 * A user task will hold the current ProcessExecution and wait for user input
 * before continuing.
 */
export class UserTask extends Task {
  public get bpmnType(): BpmnType {
    return BpmnType.userTask;
  }
  public preferredControl?: string;
  public assignee: string;
  public candidateUsers: string;
  public candidateGroups: string;
  public dueDate?: Date;
  public followUpDate?: Date;
  public formFields: Array<FormField>;
}
