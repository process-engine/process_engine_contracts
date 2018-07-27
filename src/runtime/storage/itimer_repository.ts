import {Timer} from '../types/index';

/**
 * The repository, which runs queries against the database containing timers.
 */
export interface ITimerRepository {
  /**
   * Returns a list of all stored timers.
   *
   * @async
   * @returns A promise, which resolves with the retrieved timers, or rejects an error, if the request failed.
   */
  getAll(): Promise<Array<Timer>>;

  /**
   * Returns a timer by its id.
   *
   * @async
   * @param   id The id of the timer to retrieve.
   * @returns    A promise, which resolves with the retrieved timer, or rejects an error, if the request failed.
   *             This can happen, if the timer does not exist.
   */
  getById(id: string): Promise<Timer>;

  /**
   * Creates a new timer in the database and returns the id of the created timer.
   *
   * @async
   * @param   timerToStore The timer object to store.
   * @returns              A promise, which resolves with the id of the created timer, or rejects an error, if the request failed.
   *                       This can happen, if the payload is invalid.
   */
  create(timerToStore: Timer): Promise<string>;

  /**
   * Removes a timer by its id.
   *
   * @async
   * @param   id The id of the timer to remove.
   * @returns    A promise, which resolves without content, or rejects an error, if the request failed.
   *             This can happen, if the timer does not exist.
   */
  removeById(id: string): Promise<void>;

  /**
   * Updates the last elapsed datetime for a timer with the given id.
   *
   * @async
   * @param   id          The id of the timer to update.
   * @param   lastElapsed The date and time the timer has last expired.
   * @returns             A promise, which resolves without content, or rejects an error, if the request failed.
   *                      This can happen, if the timer does not exist.
   */
  setLastElapsedById(id: string, lastElapsed: Date): Promise<void>;
}
