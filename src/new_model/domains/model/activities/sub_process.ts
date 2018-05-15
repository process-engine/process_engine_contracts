import { FlowNode } from '../base/index';
import { LaneSet } from '../types/index';
import { Activity } from './activity';
import { BpmnType } from '../../../../constants';

export class SubProcess extends Activity {
  public get bpmnType(): BpmnType {
    return BpmnType.subProcess;
  }
  public laneSets: Array<LaneSet> = [];
  public items: Array<FlowNode> = [];
}
