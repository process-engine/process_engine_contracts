"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BpmnDiagram {
    constructor(definitions) {
        this._definitions = undefined;
        this._definitions = definitions;
    }
    get definitions() {
        return this._definitions;
    }
    getProcesses() {
        const processes = [];
        this.definitions.rootElements.forEach((root) => {
            if (root.$type === 'bpmn:Process') {
                processes.push(root);
            }
        });
        return processes;
    }
    getParticipants() {
        let participants;
        this.definitions.rootElements.forEach((root) => {
            if (root.$type === 'bpmn:Collaboration') {
                participants = root.participants;
            }
        });
        return participants;
    }
    getLanes(processId) {
        const process = this._getProcessById(processId);
        let lanes = [];
        if (process && process.laneSets) {
            process.laneSets.forEach((laneSet) => {
                lanes = lanes.concat(laneSet.lanes);
            });
        }
        return lanes;
    }
    getLaneOfElement(elementId) {
        let laneId = null;
        const processes = this.getProcesses();
        processes.forEach((process) => {
            const lanes = this.getLanes(process.id);
            lanes.forEach((lane) => {
                const result = lane.flowNodeRef.filter((nodeRef) => {
                    return nodeRef.id === elementId;
                });
                if (result.length > 0) {
                    laneId = lane.id;
                }
            });
        });
        return laneId;
    }
    getNodes(processId) {
        const process = this._getProcessById(processId);
        if (process && process.flowElements) {
            return process.flowElements.filter((element) => {
                return element.$type !== 'bpmn:SequenceFlow';
            });
        }
        return [];
    }
    getFlows(processId) {
        const process = this._getProcessById(processId);
        if (process && process.flowElements) {
            return process.flowElements.filter((element) => {
                return element.$type === 'bpmn:SequenceFlow';
            });
        }
        return [];
    }
    _getProcessById(processId) {
        const processes = this.getProcesses();
        const process = processes.find((item) => item.id === processId);
        return process;
    }
}
exports.BpmnDiagram = BpmnDiagram;

//# sourceMappingURL=bpmn_diagram.js.map
