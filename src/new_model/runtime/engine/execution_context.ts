import {IIdentity} from '@essential-projects/iam_contracts';

export class ExecutionContext {

  private _identity: IIdentity;

  constructor(identity: IIdentity) {
    this._identity = identity;
  }

  // For backwards compatibility: Required by the messagebus service.
  public get encryptedToken(): string {
    return this._identity.token;
  }

  public get identity(): IIdentity {
    return this._identity;
  }
}
