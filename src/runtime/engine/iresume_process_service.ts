export interface IResumeProcessService {
  findAndResumeInterruptedProcessInstances(): Promise<void>;
}
