export interface IBpmnDiagram {
  definitions: any;
  getProcesses(): any;
  getParticipants(): any;
  getLanes(processId: string): any;
  getLaneOfElement(elementId: string): any;
  getNodes(processId: string): any;
  getFlows(processId: string): any;
  getSignals(): any;
  getSignalById(signalId: string): any;
  getMessages(): any;
  getMessageById(messageId: string): any;
  getErrors(): any;
  getErrorById(errorId: string): any;
}
