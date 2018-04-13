import { BaseElement } from './base_element';

export abstract class FlowSequence extends BaseElement {
  public name: string;
  public sourceRef: string;
  public targetRef: string;
}
