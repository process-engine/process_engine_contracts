import {Subscription} from '@essential-projects/event_aggregator_contracts';
import {Model, TimerDefinitionType} from '@process-engine/process_engine_contracts';

import {TimerEventDefinition} from '../../model/event_definitions/timer_event_definition';
import {ProcessToken} from '../types/process_token';

/**
 * Handles the creation and resolution of timers.
 */
export interface ITimerFacade {

  /**
   * Initializes a new timer for the given FlowNode, using the given type and
   * value as a baseline.
   *
   * @param   flowNode   The FlowNode to which to attach the timer.
   * @param   timerType  The type of the timer (cycle, duration, etc).
   * @param   timerValue The value of the timer (interval, duration, etc).
   * @param   token      The ProcessToken from which to get values for
   *                     timer expressions.
   * @param   callback   The function to call, after the timer has elapsed.
   * @returns            A Subscription on the event aggreator,
   *                     which can be used to wait for the timer to elapse.
   */
  initializeTimer(
    flowNode: Model.Base.FlowNode,
    timerType: TimerDefinitionType,
    timerValue: string,
    token: ProcessToken,
    callback: Function,
  ): Subscription;

  /**
   * Initializes a new timer for the given FlowNode from the given
   * timerDefinition.
   *
   * @param   flowNode        The FlowNode to which to attach the timer.
   * @param   timerDefinition The timer definition from which to build the timer.
   * @param   token           The ProcessToken from which to get values for
   *                          timer expressions.
   * @param   callback        The function to call, after the timer has elapsed.
   * @returns                 A Subscription on the event aggreator,
   *                          which can be used to wait for the timer to elapse.
   */
  initializeTimerFromDefinition(
    flowNode: Model.Base.FlowNode,
    timerDefinition: TimerEventDefinition,
    token: ProcessToken,
    callback: Function,
  ): Subscription;

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

  /**
   * Cancels the given timer subscription.
   *
   * @param subscription The subscription to cancel.
   */
  cancelTimerSubscription(subscription: Subscription): void;
}
