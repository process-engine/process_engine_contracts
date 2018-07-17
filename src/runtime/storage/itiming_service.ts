import {TimingRule} from '../types/index';

import * as moment from 'moment';

export interface ITimingService {
  once(date: moment.Moment, eventName: string): Promise<string>;
  periodic(rule: TimingRule, eventName: string): Promise<string>;
  cancel(timerId: string): Promise<void>;
  restorePersistedJobs(): Promise<void>;
}
