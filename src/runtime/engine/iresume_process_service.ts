export interface ResumeProcessService {
  findAndResumeInterruptedProcessInstances(): Promise<void>;
}
