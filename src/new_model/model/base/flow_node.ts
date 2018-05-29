import { BpmnType } from '../../../../constants';
import { BaseElement } from './base_element';

export abstract class FlowNode extends BaseElement {
  public abstract readonly bpmnType: BpmnType;
  public name: string;
  public incoming: Array<string> = [];
  public outgoing: Array<string> = [];
}
