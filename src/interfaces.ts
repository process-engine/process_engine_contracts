import {ExecutionContext, IEntity, IEntityReference, IPublicGetOptions} from '@essential-projects/core_contracts';
import { IEntityCollection, IEntityType } from '@essential-projects/data_model_contracts';
import { ISubscription } from '@essential-projects/event_aggregator_contracts';
import { IFeature } from '@essential-projects/feature_contracts';
import { IMessageSubscription } from '@essential-projects/messagebus_contracts';

export interface IBpmnDiagram {
  definitions: any;
  getProcesses(): any;
  getParticipants(): any;
  getLanes(processId: string): any;
  getLaneOfElement(elementId: string): any;
  getNodes(processId: string): any;
  getFlows(processId: string): any;
  getSignals(): any;
  getSignalById(signalId: string): any;
  getMessages(): any;
  getMessageById(messageId: string): any;
  getErrors(): any;
  getErrorById(errorId: string): any;
}

export interface IProcessDefEntityTypeService {
  importBpmnFromXml(context: ExecutionContext, param: IParamImportFromXml, options?: IImportFromXmlOptions): Promise<void>;
  importBpmnFromFile(context: ExecutionContext, param: IParamImportFromFile, options?: IImportFromFileOptions): Promise<void>;
  parseBpmnXml(xml: string): Promise<IBpmnDiagram>;
  start(context: ExecutionContext, param: IParamStart, options?: IPublicGetOptions): Promise<IEntityReference>;
}

export enum BpmnType {
  userTask = 'bpmn:UserTask',
  exclusiveGateway = 'bpmn:ExclusiveGateway',
  parallelGateway = 'bpmn:ParallelGateway',
  serviceTask = 'bpmn:ServiceTask',
  startEvent = 'bpmn:StartEvent',
  endEvent = 'bpmn:EndEvent',
  intermediateCatchEvent = 'bpmn:IntermediateCatchEvent',
  intermediateThrowEvent = 'bpmn:IntermediateThrowEvent',
  scriptTask = 'bpmn:ScriptTask',
  boundaryEvent = 'bpmn:BoundaryEvent',
  callActivity = 'bpmn:CallActivity',
  subProcess = 'bpmn:SubProcess',
}

export type EntityTypeName = string;

export interface INodeInstanceEntityTypeService {
  subscibeToNodeChannels(node: INodeInstanceEntity): INodeInstanceEntity;
  getEntityTypeFromBpmnType<TEntity extends IEntity = IEntity>(bpmnType: BpmnType): Promise<IEntityType<TEntity>>;
  createNode(context: ExecutionContext, entityType: IEntityType<IEntity>): Promise<IEntity>;
  createNextNode(context: ExecutionContext, source: any, nextDef: any, token: any): Promise<IEntity>;
  continueExecution(context: ExecutionContext, nodeInstance: IEntity): Promise<void>;
  continueFromRemote(context: ExecutionContext, params: IParamsContinueFromRemote, options?: IPublicGetOptions): Promise<void>;
}

export interface IImportFromXmlOptions extends IImportFromFileOptions {}

export interface IImportFromFileOptions {
  overwriteExisting?: boolean;
}

export interface IParamStart {
  key: string;
  initialToken?: any;
  source?: any;
  isSubProcess?: boolean;
  participant?: string;
}

export interface IParamsContinueFromRemote {
  nextDef: any;
  source: any;
  token: any;
}

export interface ISubprocessExternalEntity extends INodeInstanceEntity {
}

export interface ISubprocessInternalEntity extends INodeInstanceEntity {
}

export interface IBoundaryEventEntity extends IEventEntity {
  attachedToInstance: INodeInstanceEntity;
}

export interface IEndEventEntity extends IEventEntity {
}

export interface IEventEntity extends INodeInstanceEntity {
  dispose(): void;
}

export interface IExclusiveGatewayEntity extends INodeInstanceEntity {
  follow: any;
}

export interface IFlowDefEntity extends IEntity {
  name: string;
  key: string;
  getProcessDef(context: ExecutionContext): Promise<IProcessDefEntity>;
  processDef: IProcessDefEntity;
  getSource(context: ExecutionContext): Promise<INodeDefEntity>;
  source: INodeDefEntity;
  getTarget(context: ExecutionContext): Promise<INodeDefEntity>;
  target: INodeDefEntity;
  condition: string;
}

export interface ILaneEntity extends IEntity {
  name: string;
  key: string;
  extensions: any;
  getProcessDef(context: ExecutionContext): Promise<IProcessDefEntity>;
  processDef: IProcessDefEntity;
  features: Array<IFeature>;
  role: string;
}

export interface INodeDefEntity extends IEntity {
  name: string;
  key: string;
  getProcessDef(context: ExecutionContext): Promise<IProcessDefEntity>;
  processDef: IProcessDefEntity;
  getLane(context: ExecutionContext): Promise<ILaneEntity>;
  lane: ILaneEntity;
  type: BpmnType;
  extensions: any;
  getAttachedToNode(context: ExecutionContext): Promise<INodeDefEntity>;
  attachedToNode: INodeDefEntity;
  events: any;
  getLaneRole(context: ExecutionContext): Promise<string>;
  script: string;
  eventType: string;
  cancelActivity: boolean;
  subProcessKey: string;
  getSubProcessDef(context: ExecutionContext): Promise<INodeDefEntity>;
  subProcessDef: INodeDefEntity;
  mapper: string;
  timerDefinitionType: TimerDefinitionType;
  timerDefinition: string;
  startContext: string;
  startContextEntityType: string;
  signal: string;
  message: string;
  condition: string;
  getBoundaryEvents(context: ExecutionContext): Promise<IEntityCollection<IBoundaryEventEntity>>;
  features: Array<IFeature>;
  persist: boolean;
  errorName: string;
  errorCode: string;
}

export interface INodeInstanceEntity extends IEntity {
  name: string;
  key: string;
  getProcess(context: ExecutionContext): Promise<IProcessEntity>;
  process: IProcessEntity;
  getNodeDef(context: ExecutionContext): Promise<INodeDefEntity>;
  nodeDef: INodeDefEntity;
  type: BpmnType;
  state: string;
  participant: string;
  application: string;
  getProcessToken(context: ExecutionContext): Promise<IProcessTokenEntity>;
  processToken: IProcessTokenEntity;
  instanceCounter: number;
  start(context: ExecutionContext, source: any): Promise<void>;
  changeState(context: ExecutionContext, newState: string, source: any): void;
  error(context: ExecutionContext, error: any): void;
  execute(context: ExecutionContext): Promise<void>;
  end(context: ExecutionContext, cancelFlow: boolean): Promise<void>;
  messagebusSubscription: Promise<IMessageSubscription>;
  eventAggregatorSubscription: ISubscription;
  wait(context: ExecutionContext): Promise<void>;
  proceed(context: ExecutionContext, data: any, source: IEntity, applicationId: string, participant: string): Promise<void>;
  event(context: ExecutionContext, event: string, data: any, source: IEntity, applicationId: string, participant: string): Promise<void>;
  cancel(context: ExecutionContext): void;
  parseExtensionProperty(propertyString: string, token: any, context: ExecutionContext): any;
  triggerEvent(context: ExecutionContext, eventType: string, data: any): void;
  triggerBoundaryEvent(context: ExecutionContext, eventEntity: IBoundaryEventEntity, data: any): void;
  boundaryEvent(context: ExecutionContext, eventEntity: IBoundaryEventEntity, data: any, source: IEntity, applicationId: string, participant: string): Promise<void>;
  followBoundary(context: ExecutionContext): Promise<void>;
}

export interface IParallelGatewayEntity extends INodeInstanceEntity {
  parallelType: string;
}

export interface IProcessEntity extends IEntity {
  name: string;
  key: string;
  status: string;
  getProcessDef(context: ExecutionContext): Promise<IProcessDefEntity>;
  processDef: IProcessDefEntity;
  initializeProcess(): Promise<void>;
  start(context: ExecutionContext, params: IParamStart, options?: IPublicGetOptions): Promise<void>;
  end(context: ExecutionContext, processToken: any): Promise<void>;
  error(context: ExecutionContext, error: any): Promise<void>;
  activeInstances: any;
  allInstances: any;
  addActiveInstance(entity: IEntity): void;
  removeActiveInstance(entity: IEntity): void;
  boundProcesses: any;
}

export interface IProcessDefEntity extends IEntity {
  name: string;
  key: string;
  defId: string;
  xml: string;
  internalName: string;
  path: string;
  category: string;
  module: string;
  readonly: boolean;
  version: string;
  counter: number;
  nodeDefCollection: IEntityCollection<INodeDefEntity>;
  getNodeDefCollection(context: ExecutionContext): Promise<IEntityCollection<INodeDefEntity>>;
  flowDefCollection: IEntityCollection<IFlowDefEntity>;
  getFlowDefCollection(context: ExecutionContext): Promise<IEntityCollection<IFlowDefEntity>>;
  laneCollection: IEntityCollection<ILaneEntity>;
  getLaneCollection(context: ExecutionContext): Promise<IEntityCollection<ILaneEntity>>;
  start(context: ExecutionContext, params: IParamStart, options?: IPublicGetOptions): Promise<IEntityReference>;
  updateDefinitions(context: ExecutionContext, params?: IParamUpdateDefs): Promise<void>;
  features: Array<IFeature>;
  extensions: any;
  persist: boolean;
  updateBpmn(context: ExecutionContext, xml: string): Promise<any>;
}

export interface IProcessTokenEntity extends IEntity {
  data: any;
  getProcess(context: ExecutionContext): Promise<IProcessEntity>;
  process: IProcessEntity;
}

export interface IScriptTaskEntity extends INodeInstanceEntity {
  script: string;
}

export interface IServiceTaskEntity extends INodeInstanceEntity {
}

export interface IStartEventEntity extends IEventEntity {
}

export interface IUserTaskEntity extends INodeInstanceEntity {
  getUserTaskData(context: ExecutionContext): Promise<IUserTaskMessageData>;
}

export interface IParamImportFromFile {
  file: string;
}

export interface IParamImportFromXml {
  xml: string;
  internalName?: string;
  category?: string;
  module?: string;
  path?: string;
  readonly?: boolean;
}

export interface IParamUpdateDefs {
  bpmnDiagram: IBpmnDiagram;
}

export interface IProcessEngineService {
  config: any;
  initialize(): Promise<void>;
  start(context: ExecutionContext, data: any, options: IPublicGetOptions): Promise<string>;
  getUserTaskData(context: ExecutionContext, userTaskId: string): Promise<IUserTaskMessageData>;
}

export interface IProcessEntry {
    name: string;
    bpmnXml: string;
    category: string;
    module: string;
    path: string;
    readonly: boolean;
}

export interface IProcessRepository {
  initialize(): void;
  getProcess(processName: string): IProcessEntry;
  getProcessesByCategory(category: string): Array<IProcessEntry>;
  saveProcess(processName: string, process?: string): Promise<void>;
  getXmlFromFile(path: string): Promise<string>;
}

export enum TimerDefinitionType {
  date = 0,
  duration = 1,
  cycle = 2,
}

export interface IThrowEventEntity extends IEventEntity {
}

export interface ICatchEventEntity extends IEventEntity {
}

export interface IUserTaskMessageData {
  userTaskEntity: IUserTaskEntity;
  uiName: string;
  uiData: any;
  uiConfig: any;
}
