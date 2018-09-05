import {BpmnType} from '../../../constants';
import {Task} from './task';

/**
 * Describes a BPMN ScriptTask.
 *
 * This type of task is used to execute JS code snippets.
 */
export class ScriptTask extends Task {
  public get bpmnType(): BpmnType {
    return BpmnType.scriptTask;
  }
  public scriptFormat: string;
  public script: string;
  public resultVariable: string;
}
