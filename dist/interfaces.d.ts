import { BpmnDiagram } from './bpmn_diagram';
import { ExecutionContext } from 'iam_contracts';
export interface IProcessDefEntityTypeService {
    importBpmnFromXml(xml: string, context: ExecutionContext): Promise<void>;
    importBpmnFromFile(xml: string): Promise<void>;
    parseBpmnXml(xml: string): Promise<BpmnDiagram>;
    parseBpmnFile(path: string): Promise<BpmnDiagram>;
}
