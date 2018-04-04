export abstract class Gateway {
  public gatewayDirection: GatewayDirection;
}

export enum GatewayDirection {
  Unspecified = 0,
  Converging = 1,
  Diverging = 2,
  Mixed = 3
}