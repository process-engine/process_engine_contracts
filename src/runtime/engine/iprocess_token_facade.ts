import {Model} from './../../model';

import {ProcessToken} from './../types';

import {IFlowNodeInstanceResult} from './iflow_node_instance_result';

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
   * Checks if a result set for the given FlowNodeInstance has already been
   * stored in this facade.
   *
   * @param   flowNodeInstnaceId The ID of the FlowNodeInstance to check.
   * @returns                    True, if a result for the given FlowNodeInstance
   *                             has already been added to this facade;
   *                             false otherwise.
   */
  containsResultForFlowNodeInstance(flowNodeInstnaceId: string): boolean;

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
  getAllResults(): Array<IFlowNodeInstanceResult>;

  /**
   * Returns the currently stored ProcessTokens into the old format.
   *
   * @returns The converted ProcessTokens.
   */
  getOldTokenFormat(): any;

  /**
   * Imports the given IFlowNodeInstanceResult set into the one used by this
   * facade.
   *
   * @param results The results to import.
   */
  importResults(results: Array<IFlowNodeInstanceResult>): void;
}
