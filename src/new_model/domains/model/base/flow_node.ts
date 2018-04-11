import { FlowElement } from './index';

export abstract class FlowNode extends FlowElement {
  public incoming: Array<any>;
  public outgoing: Array<any>;
}
