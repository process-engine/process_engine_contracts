import { BpmnDiagram } from './bpmn_diagram';
import { ExecutionContext, IEntity, IPublicGetOptions } from '@process-engine-js/core_contracts';
import { IEntityType } from '@process-engine-js/data_model_contracts';
export interface IProcessDefEntityTypeService {
    importBpmnFromXml(context: ExecutionContext, param: IParamImportFromXml, options?: IPublicGetOptions): Promise<void>;
    importBpmnFromFile(context: ExecutionContext, param: IParamImportFromFile, options?: IPublicGetOptions): Promise<void>;
    parseBpmnXml(xml: string): Promise<BpmnDiagram>;
    parseBpmnFile(path: string): Promise<BpmnDiagram>;
    start(context: ExecutionContext, param: IParamStart, options?: IPublicGetOptions): Promise<IProcessEntity>;
}
export interface INodeInstanceEntityTypeService {
    createNode(context: ExecutionContext, entityType: IEntityType<IEntity>): Promise<IEntity>;
}
export interface IParamStart {
    key: string;
    initialToken: any;
    source: any;
}
export interface ISubprocessExternalEntity extends INodeInstanceEntity {
}
export interface ISubprocessInternalEntity extends INodeInstanceEntity {
}
export interface IBoundaryEventEntity extends IEventEntity {
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
    getProcessDef(): Promise<IProcessDefEntity>;
    processDef: IProcessDefEntity;
    getSource(): Promise<INodeDefEntity>;
    source: INodeDefEntity;
    getTarget(): Promise<INodeDefEntity>;
    target: INodeDefEntity;
    condition: string;
}
export interface ILaneEntity extends IEntity {
    name: string;
    key: string;
    extensions: any;
    getProcessDef(): Promise<IProcessDefEntity>;
    processDef: IProcessDefEntity;
}
export interface INodeDefEntity extends IEntity {
    name: string;
    key: string;
    getProcessDef(): Promise<IProcessDefEntity>;
    processDef: IProcessDefEntity;
    getLane(): Promise<ILaneEntity>;
    lane: ILaneEntity;
    type: string;
    extensions: any;
    getAttachedToNode(): Promise<INodeDefEntity>;
    attachedToNode: INodeDefEntity;
    events: any;
    getLaneRole(context: ExecutionContext): Promise<string>;
    script: string;
    eventType: string;
    cancelActivity: boolean;
    subProcessKey: string;
    getSubProcessDef(): Promise<INodeDefEntity>;
    subProcessDef: INodeDefEntity;
}
export interface INodeInstanceEntity extends IEntity {
    name: string;
    key: string;
    getProcess(): Promise<IProcessEntity>;
    process: IProcessEntity;
    getNodeDef(): Promise<INodeDefEntity>;
    nodeDef: INodeDefEntity;
    type: string;
    state: string;
    participant: string;
    getProcessToken(): Promise<IProcessTokenEntity>;
    processToken: IProcessTokenEntity;
    start(context: ExecutionContext, source: any): Promise<void>;
    changeState(context: ExecutionContext, newState: string, source: any): any;
    error(context: ExecutionContext, error: any): any;
}
export interface IParallelGatewayEntity extends INodeInstanceEntity {
    parallelType: string;
}
export interface IProcessEntity extends IEntity {
    name: string;
    key: string;
    getProcessDef(): Promise<IProcessDefEntity>;
    processDef: IProcessDefEntity;
    start(context: ExecutionContext, params: IParamStart, options?: IPublicGetOptions): Promise<void>;
}
export interface IProcessDefEntity extends IEntity {
    name: string;
    key: string;
    defId: string;
    xml: string;
    start(context: ExecutionContext, params: IParamStart, options?: IPublicGetOptions): Promise<IProcessEntity>;
    updateDefinitions(context: ExecutionContext, params?: IParamUpdateDefs): Promise<void>;
}
export interface IProcessTokenEntity extends IEntity {
    data: any;
    getProcess(): Promise<IProcessEntity>;
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
}
export interface IParamUpdateDefs {
    bpmnDiagram: BpmnDiagram;
}
export interface IProcessEngineService {
    initialize(): Promise<void>;
    start(context: ExecutionContext, data: any, options: IPublicGetOptions): Promise<string>;
}
