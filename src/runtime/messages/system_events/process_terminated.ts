import {IIdentity} from '@essential-projects/iam_contracts';

import {BaseSystemEventMessage} from './base_system_event_message';

/**
 * The message sent when a process is terminated.
 */
export class ProcessTerminatedMessage extends BaseSystemEventMessage {

  constructor(correlationId: string,
              processModelId: string,
              processInstanceId: string,
              flowNodeId: string,
              flowNodeInstanceId: string,
              identity: IIdentity,
              currentToken: any) {
    super(correlationId, processModelId, processInstanceId, flowNodeId, flowNodeInstanceId, identity, currentToken);
  }
}
