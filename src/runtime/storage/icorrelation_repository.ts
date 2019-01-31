import {IIdentity} from '@essential-projects/iam_contracts';

import {CorrelationState} from '../types/correlation_state';
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
   * @param   processModelId The ID of the ProcessModel for which to retrieve
   *                         the Correlations.
   * @returns                The retrieved Correlations.
   */
  getByProcessModelId(processModelId: string): Promise<Array<CorrelationFromRepository>>;

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
   * Gets all entries that describe a Subprocess for the ProcessInstance with the
   * given ID.
   *
   * @async
   * @param   processInstanceId The ID of the ProcessInstance for which to retrieve
   *                            the SubProcess-Correlations.
   * @returns                   The retrieved Correlations.
   *                            If none are found, an empty Array is returned.
   */
  getSubprocessesForProcessInstance(processInstanceId: string): Promise<Array<CorrelationFromRepository>>;

  /**
   * Returns a list of all Correlations with the desired state.
   *
   * @async
   * @param state   state State of the Correlations which should be returned.
   */
  getCorrelationsForState(state: CorrelationState): Promise<Array<CorrelationFromRepository>>;

  /**
   * Removes all correlations with a specific ProcessModelId.
   *
   * @async
   * @param   processModelId The ID of the processModel, by which correlations should be removed.
   */
  deleteCorrelationByProcessModelId(correlationId: string): Promise<void>;

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
   * adds a serialized version of the passed error.
   *
   * @async
   * @param correlationId   The ID of the Correlation which should be marked as erroneous.
   * @param error           The associated error object.
   * @throws NotFoundError  When no Correlation with the given ID was found.
   */
  finishWithError(correlationId: string, error: Error): Promise<void>;
}
