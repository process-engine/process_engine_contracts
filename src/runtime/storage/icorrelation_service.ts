import {Correlation} from '../types/index';

/**
 * The Service for accessing the CorrelationRepository.
 *
 * Correlations combine a correlation ID with a ProcessModel Hash.
 * This allows for implementing versioning of ProcessModels, as well
 * as keeping track on how a ProcessModel looked at the time a certain
 * Correlation was run.
 *
 * Note that a ProcessModel instance will only belong to one Correlation,
 * but a Correlation can have multiple ProcessModel instances.
 */
export interface ICorrelationService {

  /**
   * Returns a list of all Correlations that contain at least one active
   * ProcessInstance.
   *
   * @async
   * @returns A list of Correlations.
   */
  getAllActiveCorrelations(): Promise<Array<Correlation>>;

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
  getByCorrelationId(correlationId: string): Promise<Correlation>;
}
