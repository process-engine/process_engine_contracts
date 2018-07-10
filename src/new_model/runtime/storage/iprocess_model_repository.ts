import {Definitions} from '../..';
import {ProcessModelFromRepository} from './process_model_from_repository';

export interface IProcessModelRepository {
  persistProcessDefinitions(definitions: Definitions): Promise<void>;
  getProcessModelById(processModelId: string): Promise<ProcessModelFromRepository>;
  getProcessModels(): Promise<Array<ProcessModelFromRepository>>;
}
