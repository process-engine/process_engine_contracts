import {ExecutionContext} from '@essential-projects/core_contracts';

import {IExecutionContextFacade} from './iexecution_context_facade';

export interface IExecutionContextFacadeFactory {
  create(executionContext: ExecutionContext): IExecutionContextFacade;
}
