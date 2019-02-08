import {FlowNode} from '../../model/base';
import {ProcessToken} from '../types';
import {IProcessTokenFacade} from './index';

/**
 * Encapsulates the data sent with an OnTriggeredCallback.
 *
 * @param nextFlowNode     The FlowNode that follows the triggered BoundaryEvent.
 * @param interruptHandler If true, the BoundaryEvent is interrupting and the
 *                         FlowNodeHandler must stop working.
 * @param eventPayload     Optional: Any payload that was sent with the
 *                         triggering event.
 */
export type OnBoundaryEventTriggeredData = {
  nextFlowNode: FlowNode,
  interruptHandler: boolean,
  eventPayload?: any,
};

/**
 * Defines the signature a callback for a triggered BoundaryEvent should have.
 *
 * @param data Contains information that the decorated handler will need for
 *             processing the triggered BoundaryEvent.
 */
export type OnBoundaryEventTriggeredCallback = (data: OnBoundaryEventTriggeredData) => void | Promise<void>;

/**
 * Handles the execution of a BoundaryEvent.
 */
export interface IBoundaryEventHandler {

  /**
   * Gets the instance ID of the BoundaryEvent that this handler is responsible for.
   *
   * @returns The instance ID of the corresponding BoundaryEvent.
   */
  getInstanceId(): string;

  /**
   * Initializes the BoundaryEvent and waits until its triggering event occurs.
   * For SignalEvents, this will be an incoming signal, for MessageEvents an
   * incoming message, asf.
   *
   * @async
   * @param onTriggeredCallback        The callback to run after the
   *                                   BoundaryEvent was triggered.
   * @param token                      The current ProcessToken.
   * @param processTokenFacade         The Facade for the current ProcessToken.
   * @param attachedFlowNodeInstanceId The InstanceId of the FlowNode this
   *                                   BoundaryEvent is attached to.
   */
  waitForTriggeringEvent(
    onTriggeredCallback: OnBoundaryEventTriggeredCallback,
    token: ProcessToken,
    processTokenFacade: IProcessTokenFacade,
    attachedFlowNodeInstanceId: string,
  ): Promise<void>;

  /**
   * Cancels the Execution of this BoundaryEvent.
   * This can be used by a decorated handler to cleanup its BoundaryEvents
   * after it has finished execution.
   *
   * @async
   * @param token The current ProcessToken.
   */
  cancel(processToken: ProcessToken): Promise<void>;

  /**
   * Gets the FlowNode that follows after this BoundaryEvent.
   *
   * @returns The FlowNode that follows this BoundaryEvent
   */
  getNextFlowNode(): FlowNode;
}
