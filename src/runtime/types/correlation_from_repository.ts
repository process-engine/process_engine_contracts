/**
 * Describes a Correlation, as it is stored in the CorrelationRepository.
 */
export class CorrelationFromRepository {
  public id: string;
  public processModelHash: string;
  public processModelId: string;
  public processInstanceId: string;
  public createdAt: Date;
  public updatedAt: Date;
}
