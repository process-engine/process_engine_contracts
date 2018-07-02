export interface IIamFacade {
  checkIfUserCanAccessLane(laneId: string): Promise<boolean>;
}
