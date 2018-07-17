import {TimerType} from './timer_type';
import {TimingRule} from './timing_rule';

export class Timer {
  public id: string;
  public timerType: TimerType;
  public timerIsoString: string;
  public timerRule: TimingRule;
  public eventName: string;
  public lastElapsed: Date;
}
