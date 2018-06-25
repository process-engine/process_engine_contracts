import { Definitions, Model, Runtime } from '../..';

export interface IProcessModelPersistence {
  persistProcessDefinitions(definitions: Definitions): Promise<void>;
  getProcessModelById(processModelId: string): Promise<Model.Types.Process>;
  getProcessModels(): Promise<Array<Model.Types.Process>>;
}
