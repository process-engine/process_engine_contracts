import {IExecutionContextFacade, Model} from './../../index';

import {IIamFacade} from './iiam_facade';

export interface IIamFacadeFactory {
  create(executionContextFacade: IExecutionContextFacade, processModel: Model.Types.Process): IIamFacade;
}
