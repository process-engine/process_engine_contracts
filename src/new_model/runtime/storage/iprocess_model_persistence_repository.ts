import {Definitions, Model} from '../..';

export interface IProcessModelPersistenceRepository {
  persistProcessDefinitions(definitions: Definitions): Promise<void>;
  getProcessModelById(processModelId: string): Promise<Model.Types.Process>;
  getProcessModels(): Promise<Array<Model.Types.Process>>;
}
