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
   * Adds the results of a given FlowNode to the ProcessToken.
   *
   * @param flowNodeId         The ID of the FlowNode for which to add a result.
   * @param flowNodeInstanceId The ID of the Instance that executed the FlowNode.
   * @param result             The payload containing the result.
   */
  addResultForFlowNode(flowNodeId: string, flowNodeInstanceId: string, result: any): void;

  /**
   * Creates a copy of this ProcessTokenFacade, including all currently
   * stored values.
   *
   * This is used to allow for the TokenHistory to be passed across multiple
   * branches running in parallel to each other.
   *
   * @returns The cloned ProcessTokenFacade.
   */
  getProcessTokenFacadeForParallelBranch(): IProcessTokenFacade;

  /**
   * Takes a second ProcessTokenFacade and merges its values into its own.
   *
   * @param processTokenToMerge The ProcessTokenFacade to merge into this one.
   */
  mergeTokenHistory(processTokenToMerge: IProcessTokenFacade): void;

  /**
   * Gets all currently stored results.
   *
   * @returns A list of all results.
   */
  getAllResults(): Array<IProcessTokenResult>;

  /**
   * Returns the currently stored ProcessTokens into the old format.
   *
   * @returns The converted ProcessTokens.
   */
  getOldTokenFormat(): any;

  /**
   * Takes a SequenceFlow and checks if it contains a mapper.
   * If it does, the most recent ProcessToken is passed through that mapper
   * and stored in the resulting format.
   *
   * @param sequenceFlow The SequenceFlow for which to evaluate the mapper.
   */
  evaluateMapperForSequenceFlow(sequenceFlow: Model.Types.SequenceFlow): void;

  /**
   * Takes a FlowNode and checks if it contains a mapper.
   * If it does, the most recent ProcessToken is passed through that mapper
   * and stored in the resulting format.
   *
   * @param flowNode The FlowNode for which to evaluate the mapper.
   */
  evaluateMapperForFlowNode(flowNode: Model.Base.FlowNode): void;

  /**
   * Takes a list of ProcessTokenResults and places them into the list of
   * results associated with this Facade.
   *
   * @param processTokenResults The results to import.
   */
  importResults(processTokenResults: Array<IProcessTokenResult>): void;
}
