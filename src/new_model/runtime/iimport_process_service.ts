import {ExecutionContext} from './engine/execution_context';

export interface IImportProcessService {
  importBpmnFromXml(context: ExecutionContext, xml: string, name: string, overwriteExisting?: boolean): Promise<void>;
  importBpmnFromFile(context: ExecutionContext, filePath: string, overwriteExisting?: boolean): Promise<void>;
}
