import { IProcessTokenFascade } from '../index';
import { Model } from './../../model';

export class NextFlowNodeInfo {

  public flowNode: Model.Base.FlowNode;
  public processTokenFascade: IProcessTokenFascade;

  constructor(flowNode: Model.Base.FlowNode, processTokenFascade: IProcessTokenFascade) {
    this.flowNode = flowNode;
    this.processTokenFascade = processTokenFascade;
  }

}
