import {CorrelationFromRepository} from '../types/index';

export interface ICorrelationRepository {
  createEntry(correlationId: string, processModelHash: string): Promise<void>;
  getByCorrelationId(correlationId: string): Promise<CorrelationFromRepository>;
}
