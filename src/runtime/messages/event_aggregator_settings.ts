// tslint:disable:typedef
const messagePaths = {
  userTaskReached: 'user_task_reached',
  userTaskFinished: 'user_task_finished',
  processTerminated: 'process_terminated',
  processEnded: 'process_ended',
};

const routeParams = {
  processInstanceId: ':process_instance_id',
  processModelId: ':process_model_id',
  endEventId: ':end_event_id',
  correlationId: ':correlation_id',
  userTaskId: ':user_task_id',
  messageReference: ':message_ref',
  signalReference: ':signal_ref',
  externalTaskTopic: ':external_task_topic',
};

const routePaths = {
  finishUserTask:
    `/processengine/correlation/${routeParams.correlationId}/processmodel/${routeParams.processModelId}/node/${routeParams.userTaskId}/finish`,
  userTaskFinished:
    `/processengine/correlation/${routeParams.correlationId}/processmodel/${routeParams.processModelId}/node/${routeParams.userTaskId}/finished`,
  externalTaskCreatedForTopic: `/processengine/external_task/topic/${routeParams.externalTaskTopic}/created`,
  endEventReached: `/processengine/correlation/${routeParams.correlationId}/processmodel/${routeParams.processModelId}/ended`,
  messageEventReached: `/processengine/process/message/${routeParams.messageReference}`,
  signalEventReached: `/processengine/process/signal/${routeParams.signalReference}`,
  terminateEndEventReached: `/processengine/process/${routeParams.processInstanceId}/terminated`,
};

export const eventAggregatorSettings = {
  messagePaths: messagePaths,
  routePaths: routePaths,
  routeParams: routeParams,
};
