import * as Activities from './activities';
import * as Events from './events';
import * as Gateways from './gateways/index';
import * as Types from './types';

// TODO: Expand these enums as needed
export enum RootElement {
  Collaboration = 'bpmn:collaboration',
  Definitions = 'bpmn:definitions',
  Diagram = 'bpmndi:BPMNDiagram',
  Participant = 'bpmn:participant',
  Process = 'bpmn:process',
}

export enum Lane {
  Lane = 'bpmn:lane',
  LaneSet = 'bpmn:laneSet',
}

export enum LaneProperty {
  ChildLaneSet = 'bpmn:childLaneSet',
  FlowNodeRef = 'bpmn:flowNodeRef',
}

export enum Event {
  StartEvent = 'bpmn:startEvent',
  EndEvent = 'bpmn:endEvent',
  IntermediateCatchEvent = 'bpmn:intermediateCatchEvent',
}

export enum EventProperty {
  ErrorEventDefinition = 'bpmn:errorEventDefinition',
  SignalEventDefinition = 'bpmn:signalEventDefinition',
}

export enum FlowElement {
  SequenceFlow = 'bpmn:sequenceFlow',

  EventBasedGateway = 'bpmn:eventBasedGateway',
  ExclusiveGateway = 'bpmn:exclusiveGateway',
  ParallelGateway = 'bpmn:parallelGateway',
}

export enum FlowElementProperty {
  ConditionExpression = 'bpmn:conditionExpression',
  Documentation = 'bpmn:documentation',
  ExtensionElements = 'bpmn:extensionElements',

  SequenceFlowIncoming = 'bpmn:incoming',
  SequenceFlowOutgoing = 'bpmn:outgoing',

  XsiType = 'xsi:type',
}

export enum XmlnsProperty {
  bpmn = 'xmlns:bpmn',
  bpmndi = 'xmlns:bpmndi',
  di = 'xmlns:di',
  dc = 'xmlns:dc',
  camunda = 'xmlns:camunda',
  xsi = 'xmlns:xsi',
}
