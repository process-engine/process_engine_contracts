import {Model} from './../../model';
import {IExecutionContextFacade} from './iexecution_context_facade';

export interface IExecuteProcessService {
  start(context: IExecutionContextFacade,
        processModel: Model.Types.Process,
        startEventId: string,
        correlationId: string,
        initialPayload?: any,
        caller?: string): Promise<any>;
  startAndAwaitSpecificEndEvent(context: IExecutionContextFacade,
                                processModel: Model.Types.Process,
                                startEventId: string,
                                correlationId: string,
                                endEventId: string,
                                initialPayload?: any,
                                caller?: string): Promise<any>;
  startAndAwaitEndEvent(context: IExecutionContextFacade,
                        processModel: Model.Types.Process,
                        startEventId: string,
                        correlationId: string,
                        initialPayload?: any,
                        caller?: string): Promise<any>;
}
