# process_engine_contracts

This project contains the contracts used when interacting with the ProcessEngine.

## Namespaces

The contracts are split into two Namespaces:

### Model

This Namespace contains all components that describe a ProcessModel, such as
Activities, Gateways, Events and so forth.

The interfaces and types are grouped into folders named after their purpose:
- `activities`: Contains FlowNodes such as ScriptTasks, ServiceTasks,
CallActivities, etc.
- `base`: Contains BaseClasses and commonly used types
- `event_definitions`: Contains definitions for various event types. These are
used by the classes stored in `events`
- `events`: Contains types for all kinds of Events as supported by the BPMN
specs
- `gateways`: Contains types for all kinds of Gateways as supported by the
BPMN specs
- `type_references`: References are used by `events` and `event_definitions`
and contain informations, such as messages, signals, etc.
- `types`: Contains types for the elements that are common to all BPMNs, such as
Participants, Collaborations, Annotations, etc.

Also, it contains the interfaces for the `BpmnModelParser`.

### Runtime

This namespace contains the interfaces and types for all the services
and repositories that provide access to the ProcessEngine.

The interfaces contained are grouped into the following categories:
- `engine`: Contains interfaces for services and handlers that manage the
execution of ProcessModels
- `messages`: Contains definition for internal messages that can be send through
the EventAggregator
- `storage`: Contains interfaces for services and repositories used for accessing
the persistence layer
- `types`: Contains definitions for commonly used types, such as `ProcessToken` or
`FlowNodeInstance`
