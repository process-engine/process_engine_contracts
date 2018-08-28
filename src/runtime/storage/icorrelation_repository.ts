import {Correlation} from '../types/index';

export interface ICorrelationService {
  createEntry(correlationId: string, processModelHash: string): Promise<void>;
  getByCorrelationId(correlationId: string): Promise<Correlation>;
}
