import { FlowNode } from '../base/index';

export abstract class Gateway extends FlowNode {

  public get gatewayDirection(): GatewayDirection {
    if (!this.incoming || !this.outgoing) {
      return GatewayDirection.Unspecified;
    } else if (this.incoming.length > this.outgoing.length) {
      return GatewayDirection.Converging;
    } else if (this.outgoing.length > this.incoming.length) {
      return GatewayDirection.Diverging;
    } else {
      return GatewayDirection.Mixed;
    }
  }
}

export enum GatewayDirection {
  Unspecified = 0,
  Converging = 1,
  Diverging = 2,
  Mixed = 3,
}
