import { Task } from './task';
import { BpmnType } from '../../../../../constants';

export class ManualTask extends Task {
  public get bpmnType(): BpmnType {
    return BpmnType.manualTask;
  }

}
