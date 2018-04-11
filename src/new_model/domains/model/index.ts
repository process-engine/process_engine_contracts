import * as activities from './activities/index';
import * as eventDefinitions from './event_definitions/index';
import * as events from './events/index';
import * as gateways from './gateways/index';
import * as typeReferences from './type_references/index';
import * as types from './types/index';

export namespace Model {
  export import Activities = activities;
  export import EventDefinitions = eventDefinitions;
  export import Events = events;
  export import Gateways = gateways;
  export import TypeReferences = typeReferences;
  export import Types = types;
}

export * from './imodel_fascade';
export * from './imodel_reader';

export const Model2 = {
  Activities: activities,
  EventDefinitions: eventDefinitions,
  Events: events,
  Gateways: gateways,
  TypeReferences: typeReferences,
  Types: types,
};
