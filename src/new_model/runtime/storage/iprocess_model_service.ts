import {Model} from '../..';

import {IExecutionContextFacade} from '../engine/index';

export interface IProcessModelService {
  persistProcessDefinitions(executionContextFacade: IExecutionContextFacade, name: string, xml: string, overwriteExisting?: boolean): Promise<void>;
  getProcessModelById(executionContextFacade: IExecutionContextFacade, processModelId: string): Promise<Model.Types.Process>;
  getProcessModels(executionContextFacade: IExecutionContextFacade): Promise<Array<Model.Types.Process>>;
}
