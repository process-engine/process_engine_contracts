import {FlowNode, RootElement} from '../base/index';
import {LaneSet} from './index';
import {SequenceFlow} from './sequence_flow';

/**
 * Describes a BPMN Process.
 * Any and all information about FlowNodes, SequenceFlows and Lanes is
 * stored here.
 * This is the root element for working with ProcessModels.
 */
export class Process extends RootElement {
  public name: string;
  public isExecutable: boolean;
  public laneSet?: LaneSet;
  public flowNodes: Array<FlowNode> = [];
  public sequenceFlows: Array<SequenceFlow> = [];
}
