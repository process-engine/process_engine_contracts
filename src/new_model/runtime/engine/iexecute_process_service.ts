import {ExecutionContext} from '@essential-projects/core_contracts';
import {Model} from './../../model';

export interface IExecuteProcessService {
  start(context: ExecutionContext,
        processModel: Model.Types.Process,
        startEventId: string,
        correlationId: string,
        initialPayload?: any,
        caller?: string): Promise<any>;
  startAndAwaitSpecificEndEvent(context: ExecutionContext,
                                processModel: Model.Types.Process,
                                startEventId: string,
                                correlationId: string,
                                endEventId: string,
                                initialPayload?: any,
                                caller?: string): Promise<any>;
  startAndAwaitEndEvent(context: ExecutionContext,
                        processModel: Model.Types.Process,
                        startEventId: string,
                        correlationId: string,
                        initialPayload?: any,
                        caller?: string): Promise<any>;
}
