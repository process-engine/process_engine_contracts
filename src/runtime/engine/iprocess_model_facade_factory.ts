import {Model} from './../../index';

import {IProcessModelFacade} from './iprocess_model_facade';

export interface IProcessModelFacadeFactory {
  create(processModel: Model.Types.Process): IProcessModelFacade;
}
