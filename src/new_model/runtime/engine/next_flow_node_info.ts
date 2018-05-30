import { IProcessTokenFacade } from '../index';
import { Model } from './../../model';

export class NextFlowNodeInfo {

  public flowNode: Model.Base.FlowNode;
  public processTokenFascade: IProcessTokenFacade;

  constructor(flowNode: Model.Base.FlowNode, processTokenFascade: IProcessTokenFacade) {
    this.flowNode = flowNode;
    this.processTokenFascade = processTokenFascade;
  }

}
