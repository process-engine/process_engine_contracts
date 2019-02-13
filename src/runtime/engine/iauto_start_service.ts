/**
 * This service is responsible for starting ProcessModels
 * that make use of StartEvents with signals and messages attached to it.
 *
 * It does this, by subscribing to a global notification for messages and
 * signals.
 * Whenever a signal or message is received, the service will lookup all
 * ProcessModels that use matching StartEvents and triggers their execution.
 */
export interface IAutoStartService {

  /**
   * Starts the Service.
   * Creates all relevant subscriptions on the EventAggregator
   * and initializes relevant EventHandlers.
   *
   * @async
   */
  start(): Promise<void>;

  /**
   *
   * Stops the service.
   * Remvoes all Subscriptions on the EventAggregator.
   *
   * @async
   */
  stop(): Promise<void>;
}
