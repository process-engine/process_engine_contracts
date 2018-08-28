import {Model} from '../..';
import {ProcessDefinitionRaw} from '../types';

import {IExecutionContextFacade} from '../engine/index';

export interface IProcessModelService {
  persistProcessDefinitions(executionContextFacade: IExecutionContextFacade, name: string, xml: string, overwriteExisting?: boolean): Promise<void>;
  getProcessModelById(executionContextFacade: IExecutionContextFacade, processModelId: string): Promise<Model.Types.Process>;
  getProcessDefinitionAsXmlByName(executionContextFacade: IExecutionContextFacade, name: string): Promise<ProcessDefinitionRaw>;
  getProcessModels(executionContextFacade: IExecutionContextFacade): Promise<Array<Model.Types.Process>>;
}
