import { BaseElement } from './base_element';

export class FlowNode extends BaseElement {
  public name: string;
  public incoming: Array<string> = [];
  public outgoing: Array<string> = [];
}
