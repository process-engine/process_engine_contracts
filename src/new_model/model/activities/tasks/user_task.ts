import { Task } from './task';
import { BpmnType } from '../../../../../constants';

export class UserTask extends Task {
  public get bpmnType(): BpmnType {
    return BpmnType.userTask;
  }
  public preferedControl: string;
  public assignee: string;
  public candidateUsers: string;
  public candidateGroups: string;
  public dueDate?: Date;
  public followUpDate?: Date;
}
