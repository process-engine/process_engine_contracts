import { ExecutionContext } from '@essential-projects/core_contracts';
import { Model } from './../../model';

export interface IExecuteProcessService {
  start(context: ExecutionContext,
        processModel: Model.Types.Process,
        correlationId: string,
        initialPayload?: any,
        caller?: string): Promise<any>;
  startAndAwaitSpecificEndEvent(context: ExecutionContext,
                                processModel: Model.Types.Process,
                                correlationId: string,
                                endEventId: string,
                                initialPayload?: any): Promise<any>;
  startAndAwaitEndEvent(context: ExecutionContext,
                        processModel: Model.Types.Process,
                        correlationId: string,
                        initialPayload?: any): Promise<any>;
}
