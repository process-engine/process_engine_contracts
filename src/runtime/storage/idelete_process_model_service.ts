/**
 * The Service for deleting processModels.
 */
export interface IDeleteProcessModelService {

    /**
   * Removes all processModels, correlations, externalTasks, flowNodeInstances and ProcessTokens with a specific ProcessModelId.
   *
   * @async
   * @param    processModelId The ID of the processModel that should be removed.
   */
  deleteProcessModel(processModelId: string): Promise<void>;
}
