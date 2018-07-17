import {ExecutionContext} from './engine/execution_context';

export interface IImportProcessService {
  createBpmnFromXml(context: ExecutionContext, xml: string, name: string, overwriteExisting?: boolean): Promise<void>;
}
