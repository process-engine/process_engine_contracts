import { Process, ProcessId } from './types/index';

export interface IModelRepository {
  getProcessById(processId: ProcessId): Promise<Process>;
}
