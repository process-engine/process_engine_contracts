
export class NodeInstance {
  public id: string;
  public state: NodeInstanceState;
  public processInstanceId: string;
  public flowElementId: string;
}

export enum NodeInstanceState {
  created,
  executing,
  finished,
}
