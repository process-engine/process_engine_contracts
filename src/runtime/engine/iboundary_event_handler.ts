import {IIdentity} from '@essential-projects/iam_contracts';

import {FlowNode} from '../../model/base';
import {ProcessToken} from '../types';
import {
  IProcessModelFacade,
  IProcessTokenFacade,
} from './index';

export type OnTriggeredCallback = (data: any) => void;

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
   * @param token               The current ProcessToken.
   * @param processTokenFacade  The Facade for the current ProcessToken.
   * @param processModelFacade  The Facade for the ProcessModel.
   * @param identity            Contains the users identity.
   * @param onTriggeredCallback The callback to run after the BoundaryEvent was
   *                            triggered.
   */
  waitForTriggeringEvent(
    token: ProcessToken,
    processTokenFacade: IProcessTokenFacade,
    processModelFacade: IProcessModelFacade,
    identity: IIdentity,
    onTriggeredCallback: OnTriggeredCallback,
  ): Promise<FlowNode>;

  /**
   * Cancels the Execution of this BoundaryEvent.
   * This can be used by a decorated handler to cleanup its BoundaryEvents
   * after it has finished execution.
   */
  cancel(): Promise<void>;

  /**
   * Gets the FlowNode that follows after this BoundaryEvent.
   *
   * @returns The FlowNode that follows this BoundaryEvent
   */
  getNextFlowNode(): FlowNode;
}
