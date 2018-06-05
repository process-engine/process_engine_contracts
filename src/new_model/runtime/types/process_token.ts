import { ProcessInstanceReference } from '../type_references/index';

export class ProcessToken {
  public processInstanceReference: ProcessInstanceReference;
  public current: any;
  public history: ProcessTokenHistory;
}

export type ProcessTokenHistory = {
  [bpmnElementId: string]: any;
};
