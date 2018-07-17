import {ExecutionContext} from './execution_context';

import {IExecutionContextFacade} from './iexecution_context_facade';

export interface IExecutionContextFacadeFactory {
  create(executionContext: ExecutionContext): IExecutionContextFacade;
}
