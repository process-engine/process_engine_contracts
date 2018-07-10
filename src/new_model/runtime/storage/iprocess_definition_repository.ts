import {Definitions} from '../..';
import {ProcessDefinitionFromRepository} from './process_definition_from_repository';

export interface IProcessDefinitionRepository {
  persistProcessDefinitions(definitions: Definitions): Promise<void>;
  getProcessDefinitions(): Promise<Array<ProcessDefinitionFromRepository>>;
}
