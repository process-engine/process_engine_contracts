import { BaseElement } from './base_element';
import { BpmnType } from '../../../../constants';

export abstract class FlowNode extends BaseElement {
  public abstract readonly bpmnType: BpmnType;
  public name: string;
  public incoming: Array<string> = [];
  public outgoing: Array<string> = [];
}
