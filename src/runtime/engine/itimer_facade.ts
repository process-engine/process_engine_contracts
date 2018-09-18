import {ISubscription} from '@essential-projects/event_aggregator_contracts';
import {Model, TimerDefinitionType} from '@process-engine/process_engine_contracts';

/**
 * Handles the creation and resolution of timers.
 */
export interface ITimerFacade {

  /**
   * Initializes a new timer that will be attached to the given flowNode.
   *
   * @async
   * @param   flowNode   The FlowNode to which to attach the timer.
   * @param   timerType  The type of the timer (cycle, duration, etc).
   * @param   timerValue The value of the timer (interval, duration, etc).
   * @param   callback   The function to call, after the timer has elapsed.
   * @returns            A Subscription on the event aggreator, which can be used
   *                     to wait for the timer to elapse.
   */
  initializeTimer(flowNode: Model.Base.FlowNode,
                  timerType: TimerDefinitionType,
                  timerValue: string,
                  callback: Function): Promise<ISubscription>;


  /**
   * Takes an event definition and parsed it into a comprehensive
   * TimerDefinitionType.
   *
   * @param   eventDefinition The event definition to parse.
   * @returns                 The parsed TimerDefinitionType.
   */
  parseTimerDefinitionType(eventDefinition: any): TimerDefinitionType;

  /**
   * Takes the given event definition and parses the attached value into
   * a format that can be understood be the timer-scheduling library.
   *
   * @param   eventDefinition The event definition to parse.
   * @returns                 The parsed timer value.
   */
  parseTimerDefinitionValue(eventDefinition: any): string;
}
