import {TimingRule} from '../types/index';

import * as moment from 'moment';

/**
 * The service, which is used to access the timer repository, in order to retrieve or manipulate timer related data.
 */
export interface ITimerService {
  /**
   * Creates a timer, which will only run once and expire after a specific duration has passed,
   * or a date and time has been reached.
   *
   * @async
   * @param  date      Contains the duration of the timer, or the date and time at which it is to expire.
   * @param  eventName The name of the event that gets triggered, after the timer has expired.
   * @returns          A promise, which resolves with the id of the created timer, or rejects if the request failed.
   */
  once(date: moment.Moment, eventName: string): Promise<string>;

  /**
   * Creates a timer, which will expire repeatedly, based on the provided interval.
   *
   * @async
   * @param  rule      Uses a cron-like syntax to describe the interval in which the timer is supposed to expire.
   * @param  eventName The name of the event that gets triggered, after the timer has expired.
   * @returns          A promise, which resolves with the id of the created timer, or rejects if the request failed.
   */
  periodic(rule: TimingRule, eventName: string): Promise<string>;

  /**
   * Cancels execution of the timer with the given id.
   *
   * @async
   * @param  timerId The id of the timer to cancel.
   * @returns        A promise, which resolves without content, or rejects if the request failed.
   */
  cancel(timerId: string): Promise<void>;

  /**
   * Retrieves all currently persisted timers that have not yet expired from the database and creates scheduled timers for each of them.
   *
   * @async
   * @returns A promise, which resolves without content, or rejects if the request failed.
   */
  restorePersistedJobs(): Promise<void>;
}
