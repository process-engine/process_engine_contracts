import {FlowNode, RootElement} from '../base/index';
import {LaneSet} from './index';
import {SequenceFlow} from './sequence_flow';

export class Process extends RootElement {
  public name: string;
  public isExecutable: boolean;
  public laneSet: LaneSet;
  public flowNodes: Array<FlowNode> = [];
  public sequenceFlows: Array<SequenceFlow> = [];
}
