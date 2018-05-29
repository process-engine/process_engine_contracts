import { Model } from './../../model';
import { IProcessTokenResult } from './iprocess_token_result';

export interface IProcessTokenFascade {
  addResultForFlowNode(flowNodeId: string, result: any): Promise<void>;
  getProcessTokenFascadeForParallelBranch(): Promise<IProcessTokenFascade>;
  mergeTokenHistory(processTokenToMerge: IProcessTokenFascade): Promise<void>;
  getAllResults(): Promise<Array<IProcessTokenResult>>;
  getOldTokenFormat(): Promise<any>;
  evaluateMapperForSequenceFlow(sequenceFlow: Model.Types.SequenceFlow): Promise<void>;
  evaluateMapperForFlowNode(flowNode: Model.Base.FlowNode): Promise<void>;
}
