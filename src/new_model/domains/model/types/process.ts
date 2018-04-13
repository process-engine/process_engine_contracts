import {FlowNode, FlowSequence, RootElement} from '../base/index';
import {LaneSet} from './index';

export class Process extends RootElement {
  public name: string;
  public isExecutable: boolean;
  public laneSet: LaneSet;
  public flowNodes: Array<FlowNode> = [];
  public flowSequences: Array<FlowSequence> = [];
}
