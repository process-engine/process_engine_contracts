import { BpmnType } from '../../../../constants';
import { FlowNode } from '../base/index';
import { LaneSet, SequenceFlow } from '../types/index';
import { Activity } from './activity';

export class SubProcess extends Activity {
  public get bpmnType(): BpmnType {
    return BpmnType.subProcess;
  }
  public laneSet?: LaneSet;
  public flowNodes: Array<FlowNode> = [];
  public sequenceFlows: Array<SequenceFlow> = [];
}
