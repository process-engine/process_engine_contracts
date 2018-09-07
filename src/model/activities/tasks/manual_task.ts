import {BpmnType} from '../../../constants';
import {Task} from './task';

/**
 * Describes a BPMN manual task.
 *
 * Currently not evaluated during runtime.
 */
export class ManualTask extends Task {
  public get bpmnType(): BpmnType {
    return BpmnType.manualTask;
  }

}
