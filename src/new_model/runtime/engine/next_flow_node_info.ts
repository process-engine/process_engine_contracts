import { IProcessTokenFacade } from '../index';
import { Model } from './../../model';

export class NextFlowNodeInfo {

  public flowNode: Model.Base.FlowNode;
  public processTokenFacade: IProcessTokenFacade;

  constructor(flowNode: Model.Base.FlowNode, processTokenFacade: IProcessTokenFacade) {
    this.flowNode = flowNode;
    this.processTokenFacade = processTokenFacade;
  }

}
