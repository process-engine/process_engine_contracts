import { BaseElement } from './base_element';

export abstract class FlowNode extends BaseElement {
  public name: string;
  public incoming: Array<any> = [];
  public outgoing: Array<any> = [];
}
