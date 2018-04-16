// tslint:disable:no-namespace
import * as activities from './activities/index';
import * as base from './base/index';
import * as bpmnTags from './bpmn_component_tags';
import * as eventDefinitions from './event_definitions/index';
import * as events from './events/index';
import * as gateways from './gateways/index';
import * as typeReferences from './type_references/index';
import * as types from './types/index';

export namespace Model {
  export import Activities = activities;
  export import Base = base;
  export import EventDefinitions = eventDefinitions;
  export import Events = events;
  export import Gateways = gateways;
  export import TypeReferences = typeReferences;
  export import Types = types;
}

export namespace BpmnTags {
  export import Event = bpmnTags.Event;
  export import EventProperty = bpmnTags.EventProperty;
  export import FlowElement = bpmnTags.FlowElement;
  export import FlowElementProperty = bpmnTags.FlowElementProperty;
  export import Lane = bpmnTags.Lane;
  export import LaneProperty = bpmnTags.LaneProperty;
  export import RootElement = bpmnTags.RootElement;
  export import XmlnsProperty = bpmnTags.XmlnsProperty;
}

export * from './definitions';
export * from './imodel_fascade';
export * from './imodel_parser';
export * from './imodel_service';
export * from './xmlns';
