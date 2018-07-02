import {ExecutionContext} from '@essential-projects/core_contracts';

export interface IExecutionContextFacade {
  getIdentityToken(): string;
  getExecutionContext(): ExecutionContext;
}
