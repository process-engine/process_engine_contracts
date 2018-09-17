// tslint:disable:typedef
const messagePaths = {
  userTaskWaiting: 'user_task_waiting',
  userTaskFinished: 'user_task_finished',
  processTerminated: 'process_terminated',
  processEnded: 'process_ended',
};

const routePaths = {
  finishUserTask: '/processengine/correlation/:correlation_id/processinstance/:process_instance_id/node/:user_task_id/finish',
  userTaskFinished: '/processengine/correlation/:correlation_id/processinstance/:process_instance_id/node/:user_task_id/finished',
  processTerminated: '/processengine/process/:process_instance_id/terminated',
  processEnded: '/processengine/process/:process_instance_id/ended',
};

const routeParams = {
  processInstanceId: ':process_instance_id',
  correlationId: ':correlation_id',
  userTaskId: ':user_task_id',
}

export const eventAggregatorSettings = {
  messagePaths: messagePaths,
  routePaths: routePaths,
  routeParams: routeParams,
};
