"use strict";
var BpmnDiagram = (function () {
    function BpmnDiagram(definitions) {
        this._definitions = undefined;
        this._definitions = definitions;
    }
    Object.defineProperty(BpmnDiagram.prototype, "definitions", {
        get: function () {
            return this._definitions;
        },
        enumerable: true,
        configurable: true
    });
    BpmnDiagram.prototype.getProcesses = function () {
        var processes = [];
        this.definitions.rootElements.forEach(function (root) {
            if (root.$type === 'bpmn:Process') {
                processes.push(root);
            }
        });
        return processes;
    };
    BpmnDiagram.prototype.getParticipants = function () {
        var participants;
        this.definitions.rootElements.forEach(function (root) {
            if (root.$type === 'bpmn:Collaboration') {
                participants = root.participants;
            }
        });
        return participants;
    };
    BpmnDiagram.prototype.getLanes = function (processId) {
        var process = this._getProcessById(processId);
        var lanes = [];
        if (process && process.laneSets) {
            process.laneSets.forEach(function (laneSet) {
                lanes = lanes.concat(laneSet.lanes);
            });
        }
        return lanes;
    };
    BpmnDiagram.prototype.getLaneOfElement = function (elementId) {
        var _this = this;
        var laneId = null;
        var processes = this.getProcesses();
        processes.forEach(function (process) {
            var lanes = _this.getLanes(process.id);
            if (lanes) {
                lanes.forEach(function (lane) {
                    if (lane.flowNodeRef) {
                        var result = lane.flowNodeRef.filter(function (nodeRef) {
                            return nodeRef.id === elementId;
                        });
                        if (result.length > 0) {
                            laneId = lane.id;
                        }
                    }
                });
            }
        });
        return laneId;
    };
    BpmnDiagram.prototype.getNodes = function (processId) {
        var process = this._getProcessById(processId);
        if (process && process.flowElements) {
            return process.flowElements.filter(function (element) {
                return element.$type !== 'bpmn:SequenceFlow';
            });
        }
        return [];
    };
    BpmnDiagram.prototype.getFlows = function (processId) {
        var process = this._getProcessById(processId);
        if (process && process.flowElements) {
            return process.flowElements.filter(function (element) {
                return element.$type === 'bpmn:SequenceFlow';
            });
        }
        return [];
    };
    BpmnDiagram.prototype._getProcessById = function (processId) {
        var processes = this.getProcesses();
        var process = processes.find(function (item) { return item.id === processId; });
        return process;
    };
    BpmnDiagram.prototype.getSignals = function () {
        var signals = [];
        this.definitions.rootElements.forEach(function (root) {
            if (root.$type === 'bpmn:Signal') {
                signals.push(root);
            }
        });
        return signals;
    };
    BpmnDiagram.prototype.getSignalById = function (signalId) {
        var signals = this.getSignals();
        var signal = signals.find(function (item) { return item.id === signalId; });
        return signal;
    };
    BpmnDiagram.prototype.getMessages = function () {
        var messages = [];
        this.definitions.rootElements.forEach(function (root) {
            if (root.$type === 'bpmn:Message') {
                messages.push(root);
            }
        });
        return messages;
    };
    BpmnDiagram.prototype.getMessageById = function (messageId) {
        var messages = this.getMessages();
        var message = messages.find(function (item) { return item.id === messageId; });
        return message;
    };
    return BpmnDiagram;
}());
exports.BpmnDiagram = BpmnDiagram;

//# sourceMappingURL=bpmn_diagram.js.map
