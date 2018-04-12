import { BaseElement } from '../base/index';
import { Lane } from './lane';

export class LaneSet extends BaseElement {
  public name: string;
  public lanes: Array<Lane> = [];
}
