import { BaseElement, FlowNode } from '../base/index';
import { LaneSet } from './lane_set';

export class Lane extends BaseElement {
  public name: string;
  public items: Array<FlowNode> = [];
  public childLaneSet?: LaneSet;
}
