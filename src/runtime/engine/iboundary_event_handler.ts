import {IIdentity} from '@essential-projects/iam_contracts';

import {FlowNode} from '../../model/base';
import {BoundaryEvent} from '../../model/events';
import {ProcessToken} from '../types';
import {
  IProcessModelFacade,
  IProcessTokenFacade,
} from './index';

export type OnTriggeredCallback = (data: any) => void;

/**
 * Handles the execution of a BoundaryEvent.
 */
export interface IBoundaryEventHandler<TBoundaryEvent extends BoundaryEvent> {

  /**
   * Gets the instance ID of the BoundaryEvent that this handler is responsible for.
   *
   * @returns The instance ID of the corresponding BoundaryEvent.
   */
  getInstanceId(): string;

  /**
   * Allows a decorated handler to pass a callback to the BoundaryEvent.
   * The callback will get called, after the BoundaryEvent was triggered.
   *
   * @param callback The callback to call when the BoundaryEvent is triggered.
   */
  onTriggered(callback: OnTriggeredCallback): void;

  /**
   * Initializes the BoundaryEvent and waits until its triggering event occurs.
   * For SignalEvents, this will be an incoming signal, for MessageEvents an
   * incoming message, asf.
   *
   * @async
   * @param token                      The current ProcessToken.
   * @param processTokenFacade         The Facade for the current ProcessToken.
   * @param processModelFacade         The Facade for the ProcessModel.
   * @param identity                   Contains the users identity.
   * @param previousFlowNodeInstanceId The ID of the previously run FNI.
   */
  waitForTriggeringEvent(
    token: ProcessToken,
    processTokenFacade: IProcessTokenFacade,
    processModelFacade: IProcessModelFacade,
    identity: IIdentity,
    previousFlowNodeInstanceId?: string,
  ): Promise<FlowNode>;

  /**
   * Cancels the Execution of this BoundaryEvent.
   * This can be used by the decorated handlers to cleanup their BoundaryEvents
   * after it has finished successfully.
   */
  cancel(): Promise<void>;

  /**
   * Gets the FlowNode that follows after this BoundaryEvent.
   *
   * @returns The FlowNode that follows this BoundaryEvent
   */
  getNextFlowNode(): FlowNode;
}
