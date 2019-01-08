import {IIdentity} from '@essential-projects/iam_contracts';

import {BaseBpmnEventMessage} from './base_bpmn_event_message';

/**
 * Encapsulates a Message for the EventAggregator, describing a
 * MessageEvent.
 */
export class TerminateEndEventReachedMessage extends BaseBpmnEventMessage {

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
