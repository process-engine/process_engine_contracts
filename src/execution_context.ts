import {IIdentity} from '@essential-projects/iam_contracts';

export class ExecutionContext {

  private _identity: IIdentity;

  constructor(identity: IIdentity) {
    this._identity = identity;
  }

  public get identity(): IIdentity {
    return this._identity;
  }
}
