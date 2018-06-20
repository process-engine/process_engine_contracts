import { Definitions, Model, Runtime } from '../..';

export interface IProcessModelPersistance {
  persistProcessDefinitions(definitions: Definitions): Promise<void>;
  getProcessModelById(processModelId: string): Promise<Model.Types.Process>;
  getProcessModels(): Promise<Array<Model.Types.Process>>;
}
