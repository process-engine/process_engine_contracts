import {IProcessTokenFacade} from '../index';

import {Model, Runtime} from './../../index';

export class NextFlowNodeInfo<TNextFlowNode extends Model.Base.FlowNode> {

  public flowNode: TNextFlowNode;
  public processTokenFacade: IProcessTokenFacade;
  public token: Runtime.Types.ProcessToken;

  constructor(flowNode: TNextFlowNode, token: Runtime.Types.ProcessToken, processTokenFacade: IProcessTokenFacade) {
    this.flowNode = flowNode;
    this.token = token;
    this.processTokenFacade = processTokenFacade;
  }

}
