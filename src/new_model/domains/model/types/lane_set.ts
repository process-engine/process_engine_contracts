import { BaseElement } from '../base/index';
import { Lane } from './lane';

export class LaneSet extends BaseElement {
  public lanes: Array<Lane> = [];
}
