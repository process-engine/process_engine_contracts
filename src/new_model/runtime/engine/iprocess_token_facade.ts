import {Model} from './../../model';

import {ProcessToken} from './../types';

import {IProcessTokenResult} from './iprocess_token_result';

export interface IProcessTokenFacade {
  createProcessToken(payload?: any): ProcessToken;
  addResultForFlowNode(flowNodeId: string, result: any): Promise<void>;
  getProcessTokenFacadeForParallelBranch(): Promise<IProcessTokenFacade>;
  mergeTokenHistory(processTokenToMerge: IProcessTokenFacade): Promise<void>;
  getAllResults(): Promise<Array<IProcessTokenResult>>;
  getOldTokenFormat(): Promise<any>;
  evaluateMapperForSequenceFlow(sequenceFlow: Model.Types.SequenceFlow): Promise<void>;
  evaluateMapperForFlowNode(flowNode: Model.Base.FlowNode): Promise<void>;
}
