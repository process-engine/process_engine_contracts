import {IProcessTokenFacade} from '../index';

import {Model, Runtime} from './../../index';

export class NextFlowNodeInfo<TNextFlowNode extends Model.Base.FlowNode> {

  public flowNode: TNextFlowNode;
  public previousFlowNode: Model.Base.FlowNode;
  public processTokenFacade: IProcessTokenFacade;
  public token: Runtime.Types.ProcessToken;

  constructor(flowNode: TNextFlowNode, previousFlowNode: Model.Base.FlowNode, token: Runtime.Types.ProcessToken, processTokenFacade: IProcessTokenFacade) {
    this.flowNode = flowNode;
    this.previousFlowNode = previousFlowNode;
    this.token = token;
    this.processTokenFacade = processTokenFacade;
  }

}
