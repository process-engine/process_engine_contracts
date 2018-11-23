import {BaseSystemEventMessage} from './base_system_event_message';

/**
 * Represents the message which is send, when a ManualTask has been finished.
 */
export class ManualTaskFinishedMessage extends BaseSystemEventMessage {

  constructor(correlationId: string,
              processModelId: string,
              processInstanceId: string,
              flowNodeId: string,
              flowNodeInstanceId: string,
              currentToken: any) {
    super(correlationId, processModelId, processInstanceId, flowNodeId, flowNodeInstanceId, currentToken);
  }
}
