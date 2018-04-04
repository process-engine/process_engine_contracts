import { FlowElement } from "./index";

export abstract class FlowNode<TId extends string> extends FlowElement<TId> {
  public incoming: Array<any>;
  public outgoing: Array<any>;
}
