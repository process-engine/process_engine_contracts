import { BpmnDiagram } from './bpmn_diagram';
import { ExecutionContext, IEntity, IPublicGetOptions, IEntityReference } from '@process-engine-js/core_contracts';
import { IEntityType, EntityCollection } from '@process-engine-js/data_model_contracts';
import { IFeature } from '@process-engine-js/feature_contracts';
import { ISubscription } from '@process-engine-js/event_aggregator_contracts';
import { IMessageSubscription } from '@process-engine-js/messagebus_contracts';
export interface IProcessDefEntityTypeService {
    importBpmnFromXml(context: ExecutionContext, param: IParamImportFromXml, options?: IImportFromXmlOptions): Promise<void>;
    importBpmnFromFile(context: ExecutionContext, param: IParamImportFromFile, options?: IImportFromFileOptions): Promise<void>;
    parseBpmnXml(xml: string): Promise<BpmnDiagram>;
    start(context: ExecutionContext, param: IParamStart, options?: IPublicGetOptions): Promise<IEntityReference>;
}
export interface INodeInstanceEntityTypeService {
    createNode(context: ExecutionContext, entityType: IEntityType<IEntity>): Promise<IEntity>;
    createNextNode(context: ExecutionContext, source: any, nextDef: any, token: any): Promise<void>;
    continueExecution(context: ExecutionContext, nodeInstance: IEntity): Promise<void>;
    continueFromRemote(context: ExecutionContext, params: IParamsContinueFromRemote, options?: IPublicGetOptions): Promise<void>;
}
export interface IImportFromXmlOptions extends IImportFromFileOptions {
}
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
    type: string;
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
    getBoundaryEvents(context: ExecutionContext): Promise<EntityCollection>;
    features: Array<IFeature>;
    persist: boolean;
}
export interface INodeInstanceEntity extends IEntity {
    name: string;
    key: string;
    getProcess(context: ExecutionContext): Promise<IProcessEntity>;
    process: IProcessEntity;
    getNodeDef(context: ExecutionContext): Promise<INodeDefEntity>;
    nodeDef: INodeDefEntity;
    type: string;
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
    nodeDefCollection: EntityCollection;
    getNodeDefCollection(context: ExecutionContext): Promise<EntityCollection>;
    flowDefCollection: EntityCollection;
    getFlowDefCollection(context: ExecutionContext): Promise<EntityCollection>;
    laneCollection: EntityCollection;
    getLaneCollection(context: ExecutionContext): Promise<EntityCollection>;
    start(context: ExecutionContext, params: IParamStart, options?: IPublicGetOptions): Promise<IEntityReference>;
    updateDefinitions(context: ExecutionContext, params?: IParamUpdateDefs): Promise<void>;
    features: Array<IFeature>;
    extensions: any;
    persist: boolean;
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
    bpmnDiagram: BpmnDiagram;
}
export interface IProcessEngineService {
    initialize(): Promise<void>;
    start(context: ExecutionContext, data: any, options: IPublicGetOptions): Promise<string>;
    addActiveInstance(entity: IEntity): void;
    removeActiveInstance(entity: IEntity): void;
    activeInstances: any;
    config: any;
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
export declare enum TimerDefinitionType {
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
