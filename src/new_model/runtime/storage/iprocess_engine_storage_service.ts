import { Definitions, Model, Runtime } from './../../index';

export interface IProcessEngineStorageService {
  saveProcessInstance(processInstance: Runtime.Types.ProcessInstance): Promise<void>;
  saveProcessToken(processToken: Runtime.Types.ProcessToken): Promise<void>;
  getProcess(processId: string): Promise<Model.Types.Process>;
  saveDefinitions(definitions: Definitions): Promise<void>;
}
