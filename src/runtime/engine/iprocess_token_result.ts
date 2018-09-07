/**
 * Contains information about a FlowNodeInstances result.
 */
export interface IProcessTokenResult {
  // TODO: hash ermitteln
  // correlationId: string;
  flowNodeId: string;
  // previousHashes: Array<string>;
  result: any;
  // hash: string;
}
