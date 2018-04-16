// TODO: Expand these enums as needed
export enum CommonElement {
  Association = 'bpmn:association',
  Collaboration = 'bpmn:collaboration',
  Definitions = 'bpmn:definitions',
  Diagram = 'bpmndi:BPMNDiagram',
  Participant = 'bpmn:participant',
  Process = 'bpmn:process',
  SequenceFlow = 'bpmn:sequenceFlow',
  TextAnnotation = 'bpmn:textAnnotation',
}

export enum XmlnsProperty {
  bpmn = 'xmlns:bpmn',
  bpmndi = 'xmlns:bpmndi',
  di = 'xmlns:di',
  dc = 'xmlns:dc',
  camunda = 'xmlns:camunda',
  xsi = 'xmlns:xsi',
}

export enum Lane {
  Lane = 'bpmn:lane',
  LaneSet = 'bpmn:laneSet',
}

export enum LaneProperty {
  ChildLaneSet = 'bpmn:childLaneSet',
  FlowNodeRef = 'bpmn:flowNodeRef',
}

export enum GatewayElement {
  ComplexGateway = 'bpmn:complexGateway',
  EventBasedGateway = 'bpmn:eventBasedGateway',
  ExclusiveGateway = 'bpmn:exclusiveGateway',
  InclusiveGateway = 'bpmn:inclusiveGateway',
  ParallelGateway = 'bpmn:parallelGateway',
}

export enum EventElement {
  StartEvent = 'bpmn:startEvent',
  EndEvent = 'bpmn:endEvent',
  Boundary = 'bpmn:boundaryEvent',
  IntermediateCatchEvent = 'bpmn:intermediateCatchEvent',
  IntermediateThrowEvent = 'bpmn:intermediateThrowEvent',
}

export enum TaskElement {
  CallActivity = 'bpmn:callActivity',
  SubProcess = 'bpmn:subProcess',

  ManualTask = 'bpmn:manualTask',
  ScriptTask = 'bpmn:scriptTask',
  ServiceTask = 'bpmn:serviceTask',
  UserTask = 'bpmn:userTask',

  MethodInvocation = 'bpmn:methodInvocation',
  WebServiceInvocation = 'bpmn:webServiceInvocation',
}

export enum FlowElementProperty {
  ErrorEventDefinition = 'bpmn:errorEventDefinition',
  MessageEventDefinition = 'bpmn:messageEventDefinition',
  SignalEventDefinition = 'bpmn:signalEventDefinition',

  CamundaExpression = 'camunda:expression',
  CamundaExecutionListener = 'camunda:executionListener',
  CamundaProperties = 'camunda:properties',
  CamundaProperty = 'camunda:property',

  ConditionExpression = 'bpmn:conditionExpression',
  Documentation = 'bpmn:documentation',
  ExtensionElements = 'bpmn:extensionElements',

  SequenceFlowIncoming = 'bpmn:incoming',
  SequenceFlowOutgoing = 'bpmn:outgoing',

  XsiType = 'xsi:type',
}
