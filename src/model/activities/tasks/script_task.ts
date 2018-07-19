import { BpmnType } from '../../../constants';
import { Task } from './task';

export class ScriptTask extends Task {
  public get bpmnType(): BpmnType {
    return BpmnType.scriptTask;
  }
  public scriptFormat: string;
  public script: string;
  public resultVariable: string;
}
