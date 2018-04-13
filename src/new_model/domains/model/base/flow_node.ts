import { FlowElement } from './flow_element';

export abstract class FlowNode extends FlowElement {
  public incoming: Array<any> = [];
  public outgoing: Array<any> = [];
}
