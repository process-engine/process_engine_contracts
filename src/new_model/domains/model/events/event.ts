import { FlowNode } from './../base/index';

export abstract class Event extends FlowNode<EventId> {

}

export type EventId = string;
