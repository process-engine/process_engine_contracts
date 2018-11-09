import {BpmnType} from '../../../constants';
import {MessageEventDefinition} from '../../event_definitions';
import {Task} from './task';

/**
 * Describes a BPMN SendTask.
 *
 * A send task sends a user defined message to a ReceiveTask.
 *
 * In contrast to an Intermediate Message, a SendTask will block
 * the Process Execution, until a confirmation message from a
 * ReceiveTask was fetched.
 */
export class SendTask extends Task {
  public get bpmnType(): BpmnType {
    return BpmnType.sendTask;
  }

 /**
   * This property contains the user defined message which should be
   * send to a receive task.
  ‚*/
  public messageEventDefinition: MessageEventDefinition;
}
