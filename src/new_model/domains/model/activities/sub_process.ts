import { FlowNode } from '../base/index';
import { LaneSet } from '../types/index';
import { Activity } from './activity';

export class SubProcess extends Activity {
  public laneSets: Array<LaneSet> = [];
  public items: Array<FlowNode> = [];
}
