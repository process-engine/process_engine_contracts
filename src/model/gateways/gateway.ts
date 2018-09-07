import {FlowNode} from '../base/index';

/**
 * The base class for gateways.
 */
export abstract class Gateway extends FlowNode {

  /**
   * Determines the direction of the gateway.
   *
   * If no incoming and/or no outgoing SequenceFlows are associated with the
   * gateway, the direction will be 'unspecified', effectively rendering this
   * gateway non-executable.
   */
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

/**
 * Contains all possible types of Gateway direction.
 *
 * Currently only Converging and Diverging are supported.
 * */
export enum GatewayDirection {
  Unspecified = 'unspecified',
  Converging = 'converging',
  Diverging = 'diverging',
  Mixed = 'mixed',
}
