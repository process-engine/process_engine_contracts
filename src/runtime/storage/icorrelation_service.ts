import {IIdentity} from '@essential-projects/iam_contracts';

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
   * @param identity                The executing users identity.
   * @param correlationId           The ID of the Correlation to store.
   * @param processInstanceId       The ID of the ProcessInstance to associate
   *                                with the Correlation.
   * @param processModelId           The ID of the ProcessModel to associate
   *                                with the Correlation.
   * @param processModelHash        The Hash of the ProcessModel to associate
   *                                with the Correlation.
   * @param parentProcessInstanceId Optional: If the ProcessInstance is a
   *                                Subprocess, this contains the ID of the
   *                                ProcessInstance that started it.
   */
  createEntry(identity: IIdentity,
              correlationId: string,
              processInstanceId: string,
              processModelId: string,
              processModelHash: string,
              parentProcessInstanceId?: string): Promise<void>;

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
  getActive(): Promise<Array<Correlation>>;

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
   * Gets all entries with a specific ProcessModelId.
   *
   * @async
   * @param   processModelId The ID of the ProcessModel for which to retrieve
   *                         the Correlations.
   * @returns                The retrieved Correlations.
   */
  getByProcessModelId(processModelId: string): Promise<Array<Correlation>>;

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
  getByProcessInstanceId(processInstanceId: string): Promise<Correlation>;

  /**
   * Gets a Correlation-Object that contains all Subprocesses for the given
   * ProcessInstanceId.
   *
   * @async
   * @param   processInstanceId The ID of the ProcessInstance for which to retrieve
   *                            the SubProcess-Correlations.
   * @returns                   The retrieved Correlations.
   *                            If none are found, an empty Array is returned.
   */
  getSubprocessesForProcessInstance(processInstanceId: string): Promise<Correlation>;

  /**
   * Removes all correlations with a specific ProcessModelId.
   *
   * @async
   * @param    processModelId The ID of the processModel, by which correlations should be removed.
   */
  deleteCorrelationByProcessModelId(processModelId: string): Promise<void>;
  /**
   * Marks the Correlation with the given CorrelationId as finished.
   *
   * @async
   * @param correlationId   The ID of the Correlation which should be marked as finished.
   * @throws NotFoundError  When no Correlation with the given ID was found.
   */
  finishCorrelation(correlationId: string): Promise<void>;

  /**
   * Marks the Correlation with the given CorrelationID as erroneous and
   * adds a serialized version of the passed error (if an error object is passed).
   *
   * @async
   * @param correlationId   The ID of the Correlation which should be marked as erroneous.
   * @param error           OPTIONAL: The associated error object.
   * @throws NotFoundError  When no Correlation with the given ID was found.
   */
  finishWithError(correlationId: string, error: Error): Promise<void>;
}
