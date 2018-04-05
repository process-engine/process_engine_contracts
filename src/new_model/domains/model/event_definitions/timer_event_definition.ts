import { EventDefinition } from './index';

export class TimerEventDefinition extends EventDefinition {
  public timerType: TimerType;
}

export enum TimerType {
  timeCycle = 0,
  timeDate = 1,
  timeDuration = 2,
}
