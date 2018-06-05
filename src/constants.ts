export enum BpmnType {
  userTask = 'bpmn:UserTask',
  exclusiveGateway = 'bpmn:ExclusiveGateway',
  parallelGateway = 'bpmn:ParallelGateway',
  serviceTask = 'bpmn:ServiceTask',
  startEvent = 'bpmn:StartEvent',
  endEvent = 'bpmn:EndEvent',
  intermediateCatchEvent = 'bpmn:IntermediateCatchEvent',
  intermediateThrowEvent = 'bpmn:IntermediateThrowEvent',
  scriptTask = 'bpmn:ScriptTask',
  boundaryEvent = 'bpmn:BoundaryEvent',
  callActivity = 'bpmn:CallActivity',
  subProcess = 'bpmn:SubProcess',
  manualTask = 'bpmn:ManualTask',
  complexGateway = 'bpmn:ComplexGateway',
  inclusiveGateway = 'bpmn:InclusiveGateway',
  eventBasedGateway = 'bpmn:EventBasedGateway',
}

export enum TimerDefinitionType {
  date = 0,
  duration = 1,
  cycle = 2,
}

export type EntityTypeName = string;
