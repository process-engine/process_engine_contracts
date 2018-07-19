import { BpmnType } from '../../../constants';
import { Task } from './task';

export class ManualTask extends Task {
  public get bpmnType(): BpmnType {
    return BpmnType.manualTask;
  }

}
