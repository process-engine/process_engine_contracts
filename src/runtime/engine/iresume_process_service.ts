import {IIdentity} from '@essential-projects/iam_contracts';

export interface IResumeProcessService {

    /**
     * Finds and resumes all ProcessInstances that were interrupted before.
     *
     * @async
     * @param identity The identity with which to resume the ProcessInstances.
     */
    findAndResumeInterruptedProcessInstances(identity: IIdentity): Promise<any>;

    /**
     * Resumes a specific ProcessInstance by its ID.
     * Used primarily by CallActivities and Subprocesses.
     *
     * @async
     * @param   identity          The identity with which to resume the
     *                            ProcessInstance.
     * @param   processModelId    The ID of the ProcessModel to resume.
     * @param   processInstanceId The ID of the ProcessInstance to resume.
     * @returns                   The ProcessInstance's result.
     */
    resumeProcessInstanceById(identity: IIdentity, processModelId: string, processInstanceId: string): Promise<any>;
}
