import { Task } from './task';
import { BpmnType } from '../../../../../constants';

export class ScriptTask extends Task {
  public get bpmnType(): BpmnType {
    return BpmnType.scriptTask;
  }
  public scriptFormat: string;
  public script: string;
  public resultVariable: string;
}
