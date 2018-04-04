import { FlowElement } from '../base/index';
import { LaneSet } from '../types/index';
import { Activity } from './index';

export class SubProcess extends Activity {
  public laneSets: Array<LaneSet> = [];
  public items: Array<FlowElement> = [];
}
