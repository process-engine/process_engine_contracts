import {Timer} from '../types/index';

export interface ITimerRepository {
  getAll(): Promise<Array<Timer>>;
  getById(id: string): Promise<Timer>;
  create(): Promise<void>;
  removeById(id: string): Promise<void>;
}
