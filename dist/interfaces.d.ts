import { BpmnDiagram } from './bpmn_diagram';
import { ExecutionContext, IEntity } from '@process-engine-js/core_contracts';
export interface IProcessDefEntityTypeService {
    importBpmnFromXml(xml: string, context: ExecutionContext): Promise<void>;
    importBpmnFromFile(xml: string): Promise<void>;
    parseBpmnXml(xml: string): Promise<BpmnDiagram>;
    parseBpmnFile(path: string): Promise<BpmnDiagram>;
}
export interface IProcessDefEntity extends IEntity {
    name: string;
    xml: string;
}
