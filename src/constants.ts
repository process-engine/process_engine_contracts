/**
 * Contains a list of all known BPMN types and maps them to their corresponding XML tag.
 */
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
  sendTask = 'bpmn:SendTask',
  receiveTask = 'bpmn:ReceiveTask',
}

/**
 * Contains a list of possible timer definition types.
 */
export enum TimerDefinitionType {
  /**
   * The timer will run once and expire at the given date and time.
   */
  date = 0,
  /**
   * The timer will run once and expire after a given amount of time.
   */
  duration = 1,
  /**
   * The timer will run repeatedly in the given interval.
   */
  cycle = 2,
}

/**
 * Contains a list of all supported event types.
 */
export enum EventType {
  linkEvent = 'linkEvent',
  messageEvent = 'messageEvent',
  signalEvent = 'signalEvent',
  terminateEvent = 'terminateEvent',
  timerEvent = 'timerEvent',
  errorEvent = 'errorEvent',
}
