export interface IResumeProcessService {
  resumeInterruptedProcesses(): Promise<void>;
}
