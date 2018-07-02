import {IIdentity} from '@essential-projects/iam_contracts';

export interface IIamFacade {
  checkIfUserCanAccessLane(identity: IIdentity, laneId: string): Promise<boolean>;
}
