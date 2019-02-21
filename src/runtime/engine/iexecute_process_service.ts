import {IIdentity} from '@essential-projects/iam_contracts';

import {EndEventReachedMessage, ProcessStartedMessage} from '../messages';

/**
 * This service handles the execution of ProcessModels.
 */
export interface IExecuteProcessService {

  /**
   * Executes a ProcessModel.
   * Resolves when execution is completed.
   *
   * In case the calling service is to resolve immediately after starting the
   * ProcessModel, this method must not be awaited.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel to execute.
   * @param startEventId   The ID of the StartEvent by which to start the
   *                       ProcessModel.
   * @param correlationId  The CorrelationId to use.
   *                       If not provided, it will be generated.
   * @param initialPayload The payload to pass to the StartEvent.
   * @param caller         Optional: If a Subprocess is started, this will
   *                       contain the ID of the parent Process.
   */
  start(
    identity: IIdentity,
    processModelId: string,
    startEventId: string,
    correlationId: string,
    initialPayload?: any,
    caller?: string,
  ): Promise<ProcessStartedMessage>;

  /**
   * Executes a ProcessModel.
   * Resolves when the first EndEvent was reached.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel to execute.
   * @param startEventId   The ID of the StartEvent by which to start the
   *                       ProcessModel.
   * @param correlationId  The CorrelationId to use.
   *                       If not provided, it will be generated.
   * @param initialPayload The payload to pass to the StartEvent.
   * @param caller         Optional: If a Subprocess is started, this will
   *                       contain the ID of the parent Process.
   */
  startAndAwaitEndEvent(
    identity: IIdentity,
    processModelId: string,
    startEventId: string,
    correlationId: string,
    initialPayload?: any,
    caller?: string,
  ): Promise<EndEventReachedMessage>;

  /**
   * Executes a ProcessModel.
   * Resolves when a given EndEvent was reached.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel to execute.
   * @param startEventId   The ID of the StartEvent by which to start the
   *                       ProcessModel.
   * @param correlationId  The CorrelationId to use.
   *                       If not provided, it will be generated.
   * @param endEventId     The ID of the EndEvent to wait for.
   * @param initialPayload The payload to pass to the StartEvent.
   * @param caller         Optional: If a Subprocess is started, this will
   *                       contain the ID of the parent Process.
   */
  startAndAwaitSpecificEndEvent(
    identity: IIdentity,
    processModelId: string,
    startEventId: string,
    correlationId: string,
    endEventId: string,
    initialPayload?: any,
    caller?: string,
  ): Promise<EndEventReachedMessage>;
}
