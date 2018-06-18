import {IProcessModelFacade} from './iprocess_model_facade';
import {Model} from './../../index';

export interface IProcessModelFacadeFactory {
  create(processModel: Model.Types.Process): IProcessModelFacade;
}