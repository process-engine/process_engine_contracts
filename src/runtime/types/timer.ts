import {TimerType} from './timer_type';
import {TimingRule} from './timing_rule';

import * as moment from 'moment';

/**
 * Describes a timer used by the Timer(Boundary)Event.
 */
export class Timer {
  /**
   * The id of the timer.
   */
  public id: string;
  /**
   * The type of the timer.
   */
  public type: TimerType;
  /**
   * Date/Duration after which the timer is to expire.
   * Only used by date- and duration- type timers.
   */
  public expirationDate: moment.Moment;
  /**
   * The rule that describes the timers interval.
   * Only used by cycle-type timer.
   */
  public rule: TimingRule;
  /**
   * The name of the event the timer is to trigger after expiration.
   */
  public eventName: string;
  /**
   * The last date and time the timer has expired.
   */
  public lastElapsed: Date;
}
