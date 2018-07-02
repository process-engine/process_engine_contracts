import {Definitions, Model} from '../..';

import {IExecutionContextFacade} from '../engine/index';

export interface IProcessModelPersistenceService {
  persistProcessDefinitions(executionContextFacade: IExecutionContextFacade, definitions: Definitions): Promise<void>;
  getProcessModelById(executionContextFacade: IExecutionContextFacade, processModelId: string): Promise<Model.Types.Process>;
  getProcessModels(executionContextFacade: IExecutionContextFacade): Promise<Array<Model.Types.Process>>;
}
