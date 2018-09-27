import {IIdentity} from '@essential-projects/iam_contracts';

/**
 * Describes a Correlation, as it is stored in the CorrelationRepository.
 */
export class CorrelationFromRepository {
  public id: string;
  public processModelHash: string;
  public processModelId: string;
  public processInstanceId: string;
  public identity: IIdentity;
  public createdAt: Date;
  public updatedAt: Date;
}
