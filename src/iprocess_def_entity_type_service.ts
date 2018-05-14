import {ExecutionContext, IEntityReference, IPublicGetOptions} from '@essential-projects/core_contracts';
import {IParamStart, IProcessDefEntity} from './entities/process/index';
import {IImportFromFileOptions, IImportFromXmlOptions, IParamImportFromFile, IParamImportFromXml} from './import/index';
import {IBpmnDiagram} from './index';

export interface IProcessDefEntityTypeService {
  importBpmnFromXml(context: ExecutionContext, param: IParamImportFromXml, options?: IImportFromXmlOptions): Promise<void>;
  importBpmnFromFile(context: ExecutionContext, param: IParamImportFromFile, options?: IImportFromFileOptions): Promise<void>;
  parseBpmnXml(xml: string): Promise<IBpmnDiagram>;
  start(context: ExecutionContext, param: IParamStart, options?: IPublicGetOptions): Promise<IEntityReference>;
  getProcessDefinitionByKey(context: ExecutionContext,
                            processDefinitionKey: string,
                            version?: string,
                            versionlessFallback?: boolean): Promise<IProcessDefEntity>;
  getProcessDefinitionById(context: ExecutionContext,
                           processDefinitionId: string,
                           version?: string,
                           versionlessFallback?: boolean): Promise<IProcessDefEntity>;
  getProcessDefinitionByName(context: ExecutionContext,
                          processDefinitionName: string,
                          version?: string,
                          versionlessFallback?: boolean): Promise<IProcessDefEntity>;
}
