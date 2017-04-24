export declare class BpmnDiagram {
    private _definitions;
    constructor(definitions: any);
    readonly definitions: any;
    getProcesses(): any;
    getParticipants(): any;
    getLanes(processId: string): any;
    getLaneOfElement(elementId: any): any;
    getNodes(processId: string): any;
    getFlows(processId: string): any;
    private _getProcessById(processId);
    getSignals(): any;
    getSignalById(signalId: string): any;
    getMessages(): any;
    getMessageById(messageId: string): any;
}
