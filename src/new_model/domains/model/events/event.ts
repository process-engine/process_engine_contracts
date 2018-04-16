import {FlowNode} from './../base/index';

export abstract class Event extends FlowNode {
  public name: string;
  public incoming: Array<string> = [];
}
