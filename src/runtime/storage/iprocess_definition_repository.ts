import {ProcessDefinitionRaw} from './process_definition_raw';

export interface IProcessDefinitionRepository {
  persistProcessDefinitions(name: string, xml: string, overwriteExisting?: boolean): Promise<void>;
  getProcessDefinitions(): Promise<Array<ProcessDefinitionRaw>>;
}
