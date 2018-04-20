import { Definitions } from './definitions';

export interface IModelParser {
  parseXmlToObjectModel(bpmnXml: string): Promise<Definitions> ;
}
