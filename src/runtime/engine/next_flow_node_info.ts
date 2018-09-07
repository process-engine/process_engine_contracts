import {IProcessTokenFacade} from '../index';

import {Model, Runtime} from './../../index';

/**
 * Encapsulates information about a FlowNode to execute.
 * This type is used by a FlowNodeHandler to provide the ExecuteProcessService
 * with infos about the FlowNode it needs to execute after the current FlowNode
 * has finished.
 */
export class NextFlowNodeInfo {

  /**
   * The FlowNode to run next.
   */
  public flowNode: Model.Base.FlowNode;

  /**
   * The facade for accessing the ProcessToken.
   */
  public processTokenFacade: IProcessTokenFacade;

  /**
   * The ProcessToken of the currently active FlowNodeInstance.
   */
  public token: Runtime.Types.ProcessToken;

  constructor(flowNode: Model.Base.FlowNode, token: Runtime.Types.ProcessToken, processTokenFacade: IProcessTokenFacade) {
    this.flowNode = flowNode;
    this.token = token;
    this.processTokenFacade = processTokenFacade;
  }

}
