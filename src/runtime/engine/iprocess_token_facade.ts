import {Model} from './../../model';

import {ProcessToken} from './../types';

import {IProcessTokenResult} from './iprocess_token_result';

/**
 * This Facade encapsulates a ProcessToken and allows other components to run
 * requests against it.
 *
 * This has the advantage of keeping the ProcessToken itself safe from
 * unintended changes.
 */
export interface IProcessTokenFacade {

  /**
   * Creates a new ProcessToken.
   *
   * @param   payload The payload to use with the ProcessToken.
   * @returns         The created ProcessToken.
   */
  createProcessToken(payload?: any): ProcessToken;

  /**
   * Adds the results of a given FlowNode to the ProcessToken..
   *
   * @async
   * @param flowNodeId The ID of the FlowNode for which to add a result.
   * @param result     The payload to add to the ProcessToken.
   */
  addResultForFlowNode(flowNodeId: string, result: any): Promise<void>;

  /**
   * Creates a Copy of this ProcessTokenFacade, including all currently
   * stored values.
   *
   * This is used to allow for the TokenHistory to be passed across multiple
   * branches running in parallel to each other.
   *
   * @async
   * @returns The cloned ProcessTokenFacade.
   */
  getProcessTokenFacadeForParallelBranch(): Promise<IProcessTokenFacade>;

  /**
   * Takes a second ProcessTokenFacade and merges its values into its own.
   *
   * @async
   * @param processTokenToMerge The ProcessTokenFacade to merge into this one.
   */
  mergeTokenHistory(processTokenToMerge: IProcessTokenFacade): Promise<void>;

  /**
   * Gets all currently stored results.
   *
   * @async
   * @returns A list of all results.
   */
  getAllResults(): Promise<Array<IProcessTokenResult>>;

  /**
   * Returns the currently stored ProcessTokens into the old format.
   *
   * @async
   * @returns The converted ProcessTokens.
   */
  getOldTokenFormat(): Promise<any>;

  /**
   * Takes a SequenceFlow and checks if it contains a mapper.
   * If it does, the most recent ProcessToken is passed through that mapper
   * and stored in the resulting format.
   *
   * @async
   * @param sequenceFlow The SequenceFlow for which to evaluate the mapper.
   */
  evaluateMapperForSequenceFlow(sequenceFlow: Model.Types.SequenceFlow): Promise<void>;

  /**
   * Takes a FlowNode and checks if it contains a mapper.
   * If it does, the most recent ProcessToken is passed through that mapper
   * and stored in the resulting format.
   *
   * @async
   * @param flowNode The FlowNode for which to evaluate the mapper.
   */
  evaluateMapperForFlowNode(flowNode: Model.Base.FlowNode): Promise<void>;

  /**
   * Takes a list of ProcessTokenResults and places them into the list of
   * results associated with this Facade.
   *
   * @async
   * @param processTokenResults The results to import.
   */
  importResults(processTokenResults: Array<IProcessTokenResult>): Promise<void>;
}
