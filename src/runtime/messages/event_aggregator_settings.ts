// tslint:disable:typedef
const messagePaths = {
  userTaskReached: 'user_task_reached',
  userTaskFinished: 'user_task_finished',
  processTerminated: 'process_terminated',
  processEnded: 'process_ended',
};

const routeParams = {
  correlationId: ':correlation_id',
  endEventId: ':end_event_id',
  flowNodeInstanceId: ':flow_node_instance_id',
  messageReference: ':message_ref',
  processInstanceId: ':process_instance_id',
  processModelId: ':process_model_id',
  userTaskId: ':user_task_id',
  signalReference: ':signal_ref',
};

// tslint:disable:max-line-length
const routePaths = {
  finishUserTask:
    `/processengine/correlation/${routeParams.correlationId}/processinstance/${routeParams.processInstanceId}/usertask/${routeParams.flowNodeInstanceId}/finish`,
  userTaskFinished:
    `/processengine/correlation/${routeParams.correlationId}/processinstance/${routeParams.processInstanceId}/usertask/${routeParams.flowNodeInstanceId}/finished`,
  endEventReached: `/processengine/correlation/${routeParams.correlationId}/processmodel/${routeParams.processModelId}/ended`,
  messageEventReached: `/processengine/process/message/${routeParams.messageReference}`,
  sendTaskReached: `/processengine/process/sendtask/${routeParams.messageReference}`,
  receiveTaskReceived: `/processengine/process/receivetask/${routeParams.messageReference}`,
  signalEventReached: `/processengine/process/signal/${routeParams.signalReference}`,
  terminateEndEventReached: `/processengine/process/${routeParams.processInstanceId}/terminated`,
};

export const eventAggregatorSettings = {
  messagePaths: messagePaths,
  routePaths: routePaths,
  routeParams: routeParams,
};
