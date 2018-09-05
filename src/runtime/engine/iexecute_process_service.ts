import {Model} from './../../model';
import {IExecutionContextFacade} from './iexecution_context_facade';

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
   * @param context        The requesting users Auth Context.
   * @param processModel   The ProcessModel to execute.
   * @param startEventId   The ID of the StartEvent by which to start the
   *                       ProcessModel.
   * @param correlationId  The CorrelationId to use.
   *                       If not provided, it will be generated.
   * @param initialPayload The payload to pass to the StartEvent.
   * @param caller         Optional: If a Subprocess is started, this will
   *                       contain the ID of the parent Process.
   */
  start(context: IExecutionContextFacade,
        processModel: Model.Types.Process,
        startEventId: string,
        correlationId: string,
        initialPayload?: any,
        caller?: string): Promise<any>;

  /**
   * Executes a ProcessModel.
   * Resolves when the first EndEvent was reached.
   *
   * @async
   * @param context        The requesting users Auth Context.
   * @param processModel   The ProcessModel to execute.
   * @param startEventId   The ID of the StartEvent by which to start the
   *                       ProcessModel.
   * @param correlationId  The CorrelationId to use.
   *                       If not provided, it will be generated.
   * @param initialPayload The payload to pass to the StartEvent.
   * @param caller         Optional: If a Subprocess is started, this will
   *                       contain the ID of the parent Process.
   */
  startAndAwaitEndEvent(context: IExecutionContextFacade,
                        processModel: Model.Types.Process,
                        startEventId: string,
                        correlationId: string,
                        initialPayload?: any,
                        caller?: string): Promise<any>;

  /**
   * Executes a ProcessModel.
   * Resolves when a given EndEvent was reached.
   *
   * @async
   * @param context        The requesting users Auth Context.
   * @param processModel   The ProcessModel to execute.
   * @param startEventId   The ID of the StartEvent by which to start the
   *                       ProcessModel.
   * @param correlationId  The CorrelationId to use.
   *                       If not provided, it will be generated.
   * @param endEventId     The ID of the EndEvent to wait for.
   * @param initialPayload The payload to pass to the StartEvent.
   * @param caller         Optional: If a Subprocess is started, this will
   *                       contain the ID of the parent Process.
   */
  startAndAwaitSpecificEndEvent(context: IExecutionContextFacade,
                                processModel: Model.Types.Process,
                                startEventId: string,
                                correlationId: string,
                                endEventId: string,
                                initialPayload?: any,
                                caller?: string): Promise<any>;
}
