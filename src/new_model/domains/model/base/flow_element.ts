import { BaseElement } from './index';

export abstract class FlowElement<TId extends string = string> extends BaseElement<TId> {
  public name: string;
}
