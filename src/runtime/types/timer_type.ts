/**
 * Contains a list of possible timer definition types.
 */
export enum TimerType {
  /**
   * The timer will run once and expire at the given date and time.
   */
  once = 0,
  /**
   * The timer will run once and expire after a given amount of time.
   */
  periodic = 1,
  /**
   * The timer will run repeatedly in the given interval.
   */
  cron = 2,
}
