import {BpmnDiagram} from './bpmn_diagram';
import {ExecutionContext, IEntity, IPublicGetOptions} from '@process-engine-js/core_contracts';

export interface IProcessDefEntityTypeService {
  importBpmnFromXml(context: ExecutionContext, param: any, options?: IPublicGetOptions): Promise<void>;
  importBpmnFromFile(context: ExecutionContext, param: any, options?: IPublicGetOptions): Promise<void>;
  parseBpmnXml(xml: string): Promise<BpmnDiagram>;
  parseBpmnFile(path: string): Promise<BpmnDiagram>;
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
  setProcessDef(value: IProcessDefEntity): void;
  getSource(): Promise<INodeDefEntity>;
  setSource(value: INodeDefEntity): void;
  getTarget(): Promise<INodeDefEntity>;
  setTarget(value: INodeDefEntity): void;
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
  events: string;
  getLaneRole(context: ExecutionContext): Promise<string>;
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
}

export interface IParallelGatewayEntity extends INodeInstanceEntity {
  parallelType: string;
}

export interface IProcessEntity extends IEntity {
  name: string;
  key: string;
  getProcessDef(): Promise<IProcessDefEntity>;
  processDef: IProcessDefEntity;
}

export interface IProcessDefEntity extends IEntity {
  name: string;
  key: string;
  defId: string;
  xml: string;
  start(context: ExecutionContext): Promise<void>;
  updateDefinitions(context: ExecutionContext, newBpmnDiagram?: BpmnDiagram): Promise<void>;
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
