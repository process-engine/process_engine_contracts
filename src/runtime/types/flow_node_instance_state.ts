/**
 * Lists the various states that a flow node instance can have.
 */
export enum FlowNodeInstanceState {
  /**
   * The flow node instance is currently running.
   */
  running = 1,
  /**
   * The flow node instance has finished successfully.
   */
  finished = 2,
  /**
   * The flow node instance was terminated due to a terminate end event.
   */
  terminated = 3,
  /**
   * The flow node instance could not finish execution because of an error during execution.
   */
  error = 4,
}
