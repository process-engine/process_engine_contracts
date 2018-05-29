import { ExecutionContext } from '@essential-projects/core_contracts';

export interface IExecutionContextFascade {
  getIdentityToken(): string;
  getExecutionContext(): ExecutionContext;
}
