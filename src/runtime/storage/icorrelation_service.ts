import {IExecutionContextFacade} from '../engine/index';
import {Correlation} from '../types/index';

export interface ICorrelationService {
  getAllActiveCorrelations(executionContextFacade: IExecutionContextFacade): Promise<Array<Correlation>>;
  createEntry(correlationId: string, processModelHash: string): Promise<void>;
  getByCorrelationId(correlationId: string): Promise<Correlation>;
}
