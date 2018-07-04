import {IIdentity} from '@essential-projects/iam_contracts';

// The execution context stores any user-related information that is relevant for the current running request.
// Right now, this includes the users identity. In future versions this may also include things like
// information about the users language and locale, or other request-related data.
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
