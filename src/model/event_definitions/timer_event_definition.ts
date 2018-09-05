import {EventDefinition} from './event_definition';

// TODO: @essential-projects/timing_contracts has somethign similar.
// Do we still need this?
export class TimerEventDefinition extends EventDefinition {
  public timerType: TimerType;
}

// See above
export enum TimerType {
  timeCycle = 0,
  timeDate = 1,
  timeDuration = 2,
}
