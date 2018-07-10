import {ProcessDefinitionFromRepository} from './process_definition_from_repository';

export interface IProcessDefinitionRepository {
  persistProcessDefinitions(name: string, xml: string): Promise<void>;
  getProcessDefinitions(): Promise<Array<ProcessDefinitionFromRepository>>;
}
