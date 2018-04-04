import { BaseElement, FlowElement } from '../base/index';
import { LaneSet } from './index';

export class Lane extends BaseElement {
  public name: string;
  public items: Array<FlowElement> = [];
  public childLaneSet?: LaneSet;
}
