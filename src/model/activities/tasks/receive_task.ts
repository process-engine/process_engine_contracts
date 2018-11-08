import {BpmnType} from '../../../constants';
import {Task} from './task';
import {MessageEventDefinition} from '../../event_definitions';

/**
 * Describes a BPMN ReceiveTask.
 *
 * Task is used for receiving messages.
 */
export class ReceiveTask extends Task {
  public get bpmnType(): BpmnType {
    return BpmnType.sendTask;
  };

 /**
   * When using an IntermediateMessageCatchEvent, this will contain the message
   * to wait for.
   */
  public messageEventDefinition?: MessageEventDefinition;

}
