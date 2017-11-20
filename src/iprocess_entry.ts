export interface IProcessEntry {
  name: string;
  bpmnXml: string;
  category: string;
  module: string;
  path: string;
  readonly: boolean;
}
