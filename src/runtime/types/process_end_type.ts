/**
 * The type used to determine how a process was ended.
 */
export enum ProcessEndType {
  /**
   * The process was ended gracefully by an end event.
   */
  Ended = 0,
  /**
   * The process was terminated by a terminate end event or due to technical reasons.
   */
  Terminated = 1,
}
