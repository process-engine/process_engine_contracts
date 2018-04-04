import { BaseElement } from '../base/index';
import { Lane } from './index';

export class LaneSet extends BaseElement {
  public name: string;
  public lanes: Array<Lane> = [];
}
