import {IIdentity} from '@essential-projects/iam_contracts';

/**
 * The Service for deleting processModels.
 */
export interface IDeleteProcessModelService {

    /**
   * Removes all processModels, correlations, externalTasks, flowNodeInstances and ProcessTokens with a specific ProcessModelId.
   *
   * @async
   * @param   identity          The executing users identity.
   * @param   processModelId The ID of the processModel that should be removed.
   */
  deleteProcessModel(identity: IIdentity, processModelId: string): Promise<void>;
}
