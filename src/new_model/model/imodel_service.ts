import { Process } from './types/index';

export interface IModelService {
  getProcessById(processId: string): Promise<Process>;
}
