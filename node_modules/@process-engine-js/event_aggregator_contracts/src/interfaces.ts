import {IEntity, ExecutionContext} from '@process-engine-js/core_contracts';

export interface IEventAggregator {
  publish(event: string | any, data?: any): void;
  subscribe(event: string | Function, callback: Function): ISubscription;
  subscribeOnce(event: string | Function, callback: Function): ISubscription;
  createEntityEvent(data: any, source: IEntity, context: ExecutionContext): IEvent;
}

export interface ISubscription {
  dispose(): void;
}

export interface IEntityEvent extends IDataEvent {
  source: IEntity;
}

export interface IDataEvent extends IEvent {
  data: any;
}

export interface IErrorEvent extends IEvent {
  error: any;
  message: string;
}

export interface IEvent {
  metadata: IEventMetadata;
}

export interface IEventMetadata {
  id: string;
  applicationId?: string;
  context: ExecutionContext;
  response?: string;
}
