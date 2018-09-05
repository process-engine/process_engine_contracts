import {Model} from '../..';
import {ProcessDefinitionFromRepository} from '../types';

import {IExecutionContextFacade} from '../engine/index';

/**
 * The service, which is used to access the process model repository, in order to retrieve or manipulate process model related data.
 */
export interface IProcessModelService {
  persistProcessDefinitions(executionContextFacade: IExecutionContextFacade, name: string, xml: string, overwriteExisting?: boolean): Promise<void>;
  getProcessModelById(executionContextFacade: IExecutionContextFacade, processModelId: string): Promise<Model.Types.Process>;
  getProcessDefinitionAsXmlByName(executionContextFacade: IExecutionContextFacade, name: string): Promise<ProcessDefinitionFromRepository>;
  getProcessModels(executionContextFacade: IExecutionContextFacade): Promise<Array<Model.Types.Process>>;
}
