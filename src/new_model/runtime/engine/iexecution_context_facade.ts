import {ExecutionContext} from './execution_context';

export interface IExecutionContextFacade {
  getIdentityToken(): string;
  getExecutionContext(): ExecutionContext;
}
