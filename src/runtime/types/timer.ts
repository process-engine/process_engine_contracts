import {TimerType} from './timer_type';
import {TimingRule} from './timing_rule';

import * as moment from 'moment';

export class Timer {
  public id: string;
  public type: TimerType;
  public expirationDate: moment.Moment;
  public rule: TimingRule;
  public eventName: string;
  public lastElapsed: Date;
}
