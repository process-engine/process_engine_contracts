import {IExecutionContextFacade} from '../engine/index';
import {Correlation} from '../types/index';

export interface ICorrelationService {
  getAllActiveCorrelations(executionContextFacade: IExecutionContextFacade): Promise<Array<Correlation>>;
}
