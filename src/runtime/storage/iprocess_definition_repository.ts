import {ProcessDefinitionRaw} from '../types';

export interface IProcessDefinitionRepository {
  persistProcessDefinitions(name: string, xml: string, overwriteExisting?: boolean): Promise<void>;
  getProcessDefinitions(): Promise<Array<ProcessDefinitionRaw>>;
  getProcessDefinitionByName(definitionId: string): Promise<ProcessDefinitionRaw>;
  getByHash(hash: string): Promise<ProcessDefinitionRaw>;
}
