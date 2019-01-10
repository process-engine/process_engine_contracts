// tslint:disable:typedef
const messageParams = {
  correlationId: ':correlation_id',
  endEventId: ':end_event_id',
  flowNodeInstanceId: ':flow_node_instance_id',
  messageReference: ':message_ref',
  processInstanceId: ':process_instance_id',
  processModelId: ':process_model_id',
  userTaskId: ':user_task_id',
  manualTaskId: ':manual_task_id',
  signalReference: ':signal_ref',
};

const messagePaths = {
  // Generic messages
  userTaskReached: 'user_task_reached',
  userTaskFinished: 'user_task_finished',
  manualTaskReached: 'manual_task_reached',
  manualTaskFinished: 'manual_task_finished',
  processTerminated: 'process_terminated',
  processStarted: 'process_started',
  processEnded: 'process_ended',
  // Instance specific messages
  finishUserTask:
    `/processengine/correlation/${messageParams.correlationId}/processinstance/` +
    `${messageParams.processInstanceId}/usertask/${messageParams.flowNodeInstanceId}/finish`,
  userTaskWithInstanceIdFinished:
    `/processengine/correlation/${messageParams.correlationId}/processinstance/` +
    `${messageParams.processInstanceId}/usertask/${messageParams.flowNodeInstanceId}/finished`,
  finishManualTask:
    `/processengine/correlation/${messageParams.correlationId}/processinstance/` +
    `${messageParams.processInstanceId}/manualtask/${messageParams.flowNodeInstanceId}/finish`,
  manualTaskWithInstanceIdFinished:
    `/processengine/correlation/${messageParams.correlationId}/processinstance/` +
    `${messageParams.processInstanceId}/manualtask/${messageParams.flowNodeInstanceId}/finished`,
  endEventReached: `/processengine/correlation/${messageParams.correlationId}/processmodel/${messageParams.processModelId}/ended`,
  messageEventReached: `/processengine/process/message/${messageParams.messageReference}`,
  sendTaskReached: `/processengine/process/sendtask/${messageParams.messageReference}`,
  receiveTaskReached: `/processengine/process/receivetask/${messageParams.messageReference}`,
  signalEventReached: `/processengine/process/signal/${messageParams.signalReference}`,
  terminateEndEventReached: `/processengine/process/${messageParams.processInstanceId}/terminated`,
  processInstanceStarted: `/processengine/process_started/${messageParams.processModelId}`,
  processInstanceEnded: `/processengine/process/${messageParams.processInstanceId}/ended`,
};

export const eventAggregatorSettings = {
  messageParams: messageParams,
  messagePaths: messagePaths,
};
