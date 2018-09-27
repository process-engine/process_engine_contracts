import { BaseBpmnEventMessage } from "../base_bpmn_event_message";

/**
 * Encapsulates a Message for the EventAggregator, describing a
 * MessageEvent.
 */
export class SignalEventReachedMessage extends BaseBpmnEventMessage {

  public signalName: string;

  constructor(signalName: string,
              correlationId: string,
              processModelId: string,
              processInstanceId: string,
              flowNodeId: string,
              currentToken: any) {
    super(correlationId, processModelId, processInstanceId, flowNodeId, currentToken);
    
    this.signalName = signalName;
  }
}
