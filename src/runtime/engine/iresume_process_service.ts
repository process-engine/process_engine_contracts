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
   * @param   processInstanceId The ID of the ProcessInstance to resume.
   * @returns                   The ProcessInstance's result.
   */
  resumeProcessInstanceById(processInstanceId: string): Promise<any>;
}
