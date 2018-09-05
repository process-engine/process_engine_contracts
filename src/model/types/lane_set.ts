import {BaseElement} from '../base/index';
import {Lane} from './lane';

/**
 * Describes a BPMN LansSet; in essence a collection of lanes.
 */
export class LaneSet extends BaseElement {
  public lanes: Array<Lane> = [];
}
