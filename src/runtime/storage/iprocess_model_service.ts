import {Model} from '../..';
import {ProcessDefinitionFromRepository} from '../types';

import {IExecutionContextFacade} from '../engine/index';

/**
 * The service, which is used to access the ProcessDefinitionRepository, in order to retrieve or manipulate ProcessModel related data.
 */
export interface IProcessModelService {

  /**
   * Writes a process definition to the database.
   *
   * @async
   * @param executionContextFacade Contains the requesting users identity.
   * @param name                   The name with which to persist the
   *                               ProcessDefinition.
   * @param xml                    The ProcessDefinitions raw XML code.
   * @param overwriteExisting      If true, any existing ProcessDefinition with
   *                               the same name will be overwritten.
   * @throws                       403, if the User is forbidden to persist
   *                               ProcessDefinitions.
   * @throws                       409, if a ProcessDefinition with the name
   *                               already exists and 'overwriteExisting' is
   *                               set to 'false'.
   */
  persistProcessDefinitions(executionContextFacade: IExecutionContextFacade, name: string, xml: string, overwriteExisting?: boolean): Promise<void>;

  /**
   * Retrieves a ProcessModel by its ID.
   * The user will only be able to see FlowNodes and Lanes that he is allowed
   * to access.
   *
   * @async
   * @param  executionContextFacade Contains the requesting users identity.
   * @param  processModelId         The ID of the ProcessModel to retrieve.
   * @returns                       The retrieved ProcessModel.
   * @throws                        403, if the User is forbidden to see the
   *                                ProcessModel.
   * @throws                        404, if the ProcessModel was not found.
   */
  getProcessModelById(executionContextFacade: IExecutionContextFacade, processModelId: string): Promise<Model.Types.Process>;

  /**
   * Retrieves a ProcessDefinition in its raw XML format.
   *
   * @async
   * @param  executionContextFacade Contains the requesting users identity.
   * @param  name                   The name of the ProcessDefinition to get.
   * @returns                       The retrieved ProcessDefinition.
   * @throws                        403, if the User is forbidden to read
   *                                ProcessDefinitions.
   * @throws                        404, if the ProcessDefinition was not found.
   */
  getProcessDefinitionAsXmlByName(executionContextFacade: IExecutionContextFacade, name: string): Promise<ProcessDefinitionFromRepository>;

  /**
   * Gets a list of all stored ProcessModels.
   *
   * @async
   * @param executionContextFacade Contains the requesting users identity.
   * @returns                      The retrieved ProcessModels.
   * @throws                       403, if the User is forbidden to read
   *                               any ProcessModels.
   */
  getProcessModels(executionContextFacade: IExecutionContextFacade): Promise<Array<Model.Types.Process>>;
}
