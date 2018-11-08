import {BpmnType} from '../../../constants';
import {Task} from './task';
import {MessageEventDefinition} from '../../event_definitions';

/**
 * Describes a BPMN SendTask.
 *
 * Task is used for sending messages.
 */
export class SendTask extends Task {
  public get bpmnType(): BpmnType {
    return BpmnType.sendTask;
  };

 /**
   * When using an IntermediateMessageCatchEvent, this will contain the message
   * to wait for.
  ‚*/
  public messageEventDefinition?: MessageEventDefinition;


}
