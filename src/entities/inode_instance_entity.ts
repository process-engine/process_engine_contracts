import {ExecutionContext, IEntity} from '@essential-projects/core_contracts';
import {ISubscription} from '@essential-projects/event_aggregator_contracts';
import {IMessageSubscription} from '@essential-projects/messagebus_contracts';
import {BpmnType} from '../index';
import {IBoundaryEventEntity} from './event/index';
import {INodeDefEntity} from './index';
import {IProcessEntity, IProcessTokenEntity} from './process/index';

export interface INodeInstanceEntity extends IEntity {
  name: string;
  key: string;
  process: IProcessEntity;
  nodeDef: INodeDefEntity;
  type: BpmnType;
  state: string;
  participant: string;
  application: string;
  processToken: IProcessTokenEntity;
  instanceCounter: number;
  messagebusSubscription: Promise<IMessageSubscription>;
  eventAggregatorSubscription: ISubscription;
  getProcess(context: ExecutionContext): Promise<IProcessEntity>;
  getNodeDef(context: ExecutionContext): Promise<INodeDefEntity>;
  getProcessToken(context: ExecutionContext): Promise<IProcessTokenEntity>;
  start(context: ExecutionContext, source: any): Promise<void>;
  changeState(context: ExecutionContext, newState: string, source: any): void;
  error(context: ExecutionContext, error: any): void;
  execute(context: ExecutionContext): Promise<void>;
  end(context: ExecutionContext, cancelFlow: boolean): Promise<void>;
  terminate(context: ExecutionContext, processToken: any): Promise<void>;
  wait(context: ExecutionContext): Promise<void>;
  proceed(context: ExecutionContext, data: any, source: IEntity, applicationId: string, participant: string): Promise<void>;
  event(context: ExecutionContext, event: string, data: any, source: IEntity, applicationId: string, participant: string): Promise<void>;
  cancel(context: ExecutionContext): void;
  parseExtensionProperty(propertyString: string, token: any, context: ExecutionContext): any;
  triggerEvent(context: ExecutionContext, eventType: string, data: any): void;
  triggerBoundaryEvent(context: ExecutionContext, eventEntity: IBoundaryEventEntity, data: any): void;
  boundaryEvent(context: ExecutionContext,
                eventEntity: IBoundaryEventEntity,
                data: any,
                source: IEntity,
                applicationId: string,
                participant: string): Promise<void>;
  followBoundary(context: ExecutionContext): Promise<void>;
}
