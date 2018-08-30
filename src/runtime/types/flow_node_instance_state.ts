/**
 * Lists the various states that a flow node instance can have.
 */
export enum FlowNodeInstanceState {
  running = 'running',
  suspended = 'suspended',
  finished = 'finished',
  terminated = 'terminated',
  error = 'error',
}
