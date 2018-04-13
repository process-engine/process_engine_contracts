import * as activities from './activities/index';
import * as base from './base/index';
import * as eventDefinitions from './event_definitions/index';
import * as events from './events/index';
import * as gateways from './gateways/index';
import * as typeReferences from './type_references/index';
import * as types from './types/index';

// tslint:disable-next-line:no-namespace
export namespace Model {
  export import Activities = activities;
  export import Base = base;
  export import EventDefinitions = eventDefinitions;
  export import Events = events;
  export import Gateways = gateways;
  export import TypeReferences = typeReferences;
  export import Types = types;
}

export * from './definitions';
export * from './imodel_fascade';
export * from './imodel_parser';
export * from './imodel_service';
export * from './xmlns';
