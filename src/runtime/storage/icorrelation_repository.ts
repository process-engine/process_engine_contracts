import {CorrelationFromRepository} from '../types/index';

/**
 * The repository for accessing and manipulating correlations.
 *
 * Correlations combine a correlation ID with a ProcessModel Hash.
 * This allows for implementing versioning of ProcessModels, as well
 * as keeping track on how a ProcessModel looked at the time a certain
 * Correlation was run.
 *
 * Note that a ProcessModel instance will only belong to one Correlation,
 * but a Correlation can have multiple ProcessModel instances.
 */
export interface ICorrelationRepository {

  /**
   * Stores a new Correlation in the database.
   *
   * @async
   * @param correlationId     The ID of the Correlation to store.
   * @param processinstanceId The ID of the ProcessInstance to associate with
   *                          the Correlation.
   * @param processModelId    The ID of the ProcessModel to associate with
   *                          the Correlation.
   * @param processModelHash  The Hash of the ProcessModel to associate with
   *                          the Correlation.
   */
  createEntry(correlationId: string, processinstanceId: string, processModelId: string, processModelHash: string): Promise<void>;

  /**
   * Returns a list of all Correlations.
   *
   * @async
   * @returns A list of Correlations.
   */
  getAll(): Promise<Array<CorrelationFromRepository>>;

  /**
   * Gets all entries with a specific CorrelationId.
   *
   * @async
   * @param   correlationId The ID of the Correlation to retrieve.
   * @returns               The retrieved Correlations.
   * @throws                404, If the Correlation was not found.
   */
  getByCorrelationId(correlationId: string): Promise<Array<CorrelationFromRepository>>;

  /**
   * Gets all entries with a specific ProcessModelId.
   *
   * @async
   * @param   processmodelId The ID of the ProcessModel for which to retrieve
   *                         the Correlations.
   * @returns                The retrieved Correlations.
   */
  getByProcessModelId(processmodelId: string): Promise<Array<CorrelationFromRepository>>;

  /**
   * Gets the entry that belongs to the given ProcessInstanceId.
   * Note that ProcessInstanceIds are always unique, so this will always
   * return only one entry.
   *
   * @async
   * @param   processInstanceId The ID of the ProcessInstance for which to retrieve
   *                            the Correlations.
   * @returns                   The retrieved Correlation.
   * @throws                    404, If the Correlation was not found.
   */
  getByProcessInstanceId(processInstanceId: string): Promise<CorrelationFromRepository>;

  /**
   * Retrieves all Correlations associated with the given ProcessModelHash.
   *
   * @async
   * @param processModelHash The ProcessModel Hash for which to get the
   *                         Correlations.
   * @returns                The retrieved Correlations.
   */
  getByProcessModelHash(processModelHash: string): Promise<Array<CorrelationFromRepository>>;

  /**
   * Retrieves all Correlations associated with the given list of
   * ProcessModelHashes.
   *
   * @async
   * @param processModelHashes The ProcessModel Hashes for which to get the
   *                           Correlations.
   * @returns                  The retrieved Correlations.
   */
  getByProcessModelHashes(processModelHashes: Array<string>): Promise<Array<CorrelationFromRepository>>;
}
