import { Definitions } from './definitions';

export interface IModelReader {
  read(bpmnXml: string): Definitions;
}
