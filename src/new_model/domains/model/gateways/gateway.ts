import { FlowNode } from '../base/index';

export abstract class Gateway extends FlowNode {
  public gatewayDirection: GatewayDirection = GatewayDirection.Unspecified;
}

export enum GatewayDirection {
  Unspecified = 0,
  Converging = 1,
  Diverging = 2,
  Mixed = 3,
}
