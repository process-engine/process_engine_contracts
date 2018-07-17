import {Timer} from '../types/index';

export interface ITimerRepository {
  getAll(): Promise<Array<Timer>>;
  getById(id: string): Promise<Timer>;
  create(timerToStore: Timer): Promise<string>;
  removeById(id: string): Promise<void>;
}
