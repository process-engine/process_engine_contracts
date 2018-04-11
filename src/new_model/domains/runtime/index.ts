import * as activities from '../model/activities/index';
// import * as eventDefinitions from './event_definitions/index';
import * as events from '../model/events/index';
// import * as gateways from './gateways/index';
// import * as tasks from './tasks/index';
import * as typeReferences from './type_references/index';
import * as types from './types/index';

export namespace Runtime {
  export import Activities = activities;
  // export import EventDefinitions = eventDefinitions;
  export import Events = events;
  // export import Gateways = gateways;
  // export import Tasks = tasks;
  export import TypeReferences = typeReferences;
  export import Types = types;
}

export * from './iruntime_fascade';
