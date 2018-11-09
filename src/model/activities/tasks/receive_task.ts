import {BpmnType} from '../../../constants';
import {MessageEventDefinition} from '../../event_definitions';
import {Task} from './task';

/**
 * Describes a BPMN ReceiveTask.
 *
 * Task is used for receiving messages.
 */
export class ReceiveTask extends Task {
  public get bpmnType(): BpmnType {
    return BpmnType.receiveTask;
  }

 /**
   * When using an IntermediateMessageCatchEvent, this will contain the message
   * to wait for.
   */
  public messageEventDefinition?: MessageEventDefinition;

}
