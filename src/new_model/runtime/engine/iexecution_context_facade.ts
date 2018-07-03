import {IIdentity} from '@essential-projects/iam_contracts';
import {ExecutionContext} from './execution_context';

export interface IExecutionContextFacade {
  getIdentity(): IIdentity;
  getExecutionContext(): ExecutionContext;
}
