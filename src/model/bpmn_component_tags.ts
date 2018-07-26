// TODO: Expand these enums as needed
export enum CommonElement {
  Collaboration = 'bpmn:collaboration',
  Definitions = 'bpmn:definitions',
  Diagram = 'bpmndi:BPMNDiagram',
  Participant = 'bpmn:participant',
  Process = 'bpmn:process',
  Error = 'bpmn:error',
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

export enum OtherElements {
  Association = 'bpmn:association',
  SequenceFlow = 'bpmn:sequenceFlow',
  TextAnnotation = 'bpmn:textAnnotation',
}

export enum FlowElementProperty {
  ErrorEventDefinition = 'bpmn:errorEventDefinition',
  MessageEventDefinition = 'bpmn:messageEventDefinition',
  SignalEventDefinition = 'bpmn:signalEventDefinition',
  TerminateEventDefinition = 'bpmn:terminateEventDefinition',
  TimerEventDefinition = 'bpmn:timerEventDefinition',

  BpmnScript = 'bpmn:script',

  ConditionExpression = 'bpmn:conditionExpression',
  Documentation = 'bpmn:documentation',
  ExtensionElements = 'bpmn:extensionElements',

  SequenceFlowIncoming = 'bpmn:incoming',
  SequenceFlowOutgoing = 'bpmn:outgoing',

  XsiType = 'xsi:type',
}

export enum CamundaProperty {
  CalledElementBinding = 'camunda:calledElementBinding',
  CalledElementVersion = 'camunda:calledElementVersion',
  CalledElementTenantId = 'camunda:calledElementTenantId',
  Assignee = 'camunda:assignee',
  CandidateUsers = 'camunda:candidateUsers',
  CandidateGroups = 'camunda:candidateGroups',
  DueDate = 'camunda:dueDate',
  ExecutionListener = 'camunda:executionListener',
  Expression = 'camunda:expression',
  FormData = 'camunda:formData',
  FormField = 'camunda:formField',
  FollowupDate = 'camunda:followUpDate',
  Properties = 'camunda:properties',
  Property = 'camunda:property',
  ResultVariable = 'camunda:resultVariable',
  Value = 'camunda:value',
  VariableMappingClass = 'camunda:variableMappingClass',
  VariableMappingDelegateExpression = 'camunda:variableMappingDelegateExpression',
}
