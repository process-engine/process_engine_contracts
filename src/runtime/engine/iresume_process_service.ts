export interface IResumeProcessService {
  /**
   * Finds and resumes all ProcessInstances that were interrupted before.
   *
   * @async
   */
  findAndResumeInterruptedProcessInstances(): Promise<any>;

  /**
   * Resumes a specific ProcessInstance by its ID.
   * Used primarily by CallActivities and Subprocesses.
   *
   * @async
   * @param   processModelId    The ID of the ProcessModel to resume.
   * @param   processInstanceId The ID of the ProcessInstance to resume.
   * @returns                   The ProcessInstance's result.
   */
  resumeProcessInstanceById(processModelId: string, processInstanceId: string): Promise<any>;
}
