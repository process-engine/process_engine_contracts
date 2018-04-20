import { ProcessInstanceId } from '../types/index';

export class NodeInstance {
  public id: string;
  public state: NodeInstanceState;
  public processInstanceId: ProcessInstanceId;
  public flowElementId: string;
}

export enum NodeInstanceState {
  created,
  executing,
  finished,
}
