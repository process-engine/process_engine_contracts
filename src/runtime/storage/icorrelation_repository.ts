import {CorrelationFromRepository} from '../types/index';

/**
 * The repository for accessing and manipulating correlations.
 *
 * Correlations combine a correlation ID with a ProcessModel Hash.
 * This allows for implementing versioning of ProcessModels, aswell
 * as keeping record on how a ProcessModel looked at the time a certain
 * Correlation was run.
 */
export interface ICorrelationRepository {

  /**
   * Stores a new Correlation in the database.
   *
   * @async
   * @param correlationId    The ID of the Correlation to store.
   * @param processModelHash The Hash of the ProcessModel to associate with
   *                         the Correlation.
   */
  createEntry(correlationId: string, processModelHash: string): Promise<void>;

  /**
   * Gets a specific Correlation by its ID.
   *
   * @async
   * @param   correlationId The ID of the Correlation to retrieve.
   * @returns               The retrieved Correlation.
   * @throws                404, If the Correlation was not found.
   */
  getByCorrelationId(correlationId: string): Promise<CorrelationFromRepository>;
}
