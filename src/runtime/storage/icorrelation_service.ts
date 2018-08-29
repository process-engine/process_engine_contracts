import {Correlation} from '../types/index';

export interface ICorrelationService {
  getAllActiveCorrelations(): Promise<Array<Correlation>>;
  createEntry(correlationId: string, processModelHash: string): Promise<void>;
  getByCorrelationId(correlationId: string): Promise<Correlation>;
}
