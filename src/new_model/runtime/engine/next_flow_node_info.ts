import { IProcessTokenFacade } from '../index';
import { Model, Runtime } from './../../../index';

export class NextFlowNodeInfo {

  public flowNode: Model.Base.FlowNode;
  public processTokenFacade: IProcessTokenFacade;
  public token: Runtime.Types.ProcessToken;

  constructor(flowNode: Model.Base.FlowNode, token: Runtime.Types.ProcessToken, processTokenFacade: IProcessTokenFacade) {
    this.flowNode = flowNode;
    this.token = token;
    this.processTokenFacade = processTokenFacade;
  }

}
