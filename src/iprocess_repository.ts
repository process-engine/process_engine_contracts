import {IProcessEntry} from './index';

export interface IProcessRepository {
  initialize(): void;
  getProcess(processName: string): IProcessEntry;
  getProcessesByCategory(category: string): Array<IProcessEntry>;
  saveProcess(processName: string, process?: string): Promise<void>;
  getXmlFromFile(path: string): Promise<string>;
}
