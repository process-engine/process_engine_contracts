import { FlowNode } from "./base/flow_node";

export abstract class Event extends FlowNode<EventId> {

}

export type EventId = string;
