import { StartEvent } from "../bpmn/start_event";
import { StartEvent } from "../bpmn/start_event";
import { StartEvent } from "../bpmn/start_event";
import { StartEvent } from "../bpmn/start_event";
import { StartEvent } from "../bpmn/start_event";

export interface IProcessModelFascade {
  queryStartEvents(predicate: IPredicate<StartEvent>);
  queryEndEvents(predicate: IPredicate<EndEvent>);
  queryActivities(predicate: IPredicate<Activity>);
  queryExclusiveGateways(predicate: IPredicate<ExclusiveGateway>);
  queryBoundaryEvents(predicate: IPredicate<BoundaryEvent>);
}

export interface IPredicate<T> {
  (item: T): boolean;
}
