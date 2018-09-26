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
   * Stores a new Correlation in the database.
   *
   * @async
   * @param correlationId    The ID of the Correlation to store.
   * @param processModelHash The Hash of the ProcessModel to associate with
   *                         the Correlation.
   */
  createEntry(correlationId: string, processModelHash: string): Promise<void>;

  /**
   * Returns a list of all Correlations.
   *
   * @async
   * @returns A list of Correlations.
   */
  getAll(): Promise<Array<Correlation>>;

  /**
   * Returns a list of all Correlations that contain at least one active
   * ProcessInstance.
   *
   * @async
   * @returns A list of Correlations.
   */
  getAllActiveCorrelations(): Promise<Array<Correlation>>;

  /**
   * Gets a specific Correlation by its ID.
   *
   * @async
   * @param   correlationId The ID of the Correlation to retrieve.
   * @returns               The retrieved Correlation.
   * @throws                404, If the Correlation was not found.
   */
  getByCorrelationId(correlationId: string): Promise<Correlation>;

  /**
   * Retrieves all Correlations in which the given ProcessModel was executed.
   *
   * @async
   * @param processModelId The ID of the ProcessModel for which to get the
   *                       Correlations.
   * @returns              The retrieved Correlations.
   */
  getCorrelationsForProcessModel(processModelId: string): Promise<Array<Correlation>>;
}
