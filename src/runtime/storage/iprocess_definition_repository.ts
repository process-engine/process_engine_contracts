import {ProcessDefinitionFromRepository} from '../types';

export interface IProcessDefinitionRepository {
  persistProcessDefinitions(name: string, xml: string, overwriteExisting?: boolean): Promise<void>;
  getProcessDefinitions(): Promise<Array<ProcessDefinitionFromRepository>>;
  getProcessDefinitionByName(definitionId: string): Promise<ProcessDefinitionFromRepository>;
  getByHash(hash: string): Promise<ProcessDefinitionFromRepository>;
}
