import { BaseElement, FlowElement } from '../base/index';
import { LaneSet } from './lane_set';

export class Lane extends BaseElement {
  public name: string;
  public items: Array<FlowElement> = [];
  public childLaneSet?: LaneSet;
}
