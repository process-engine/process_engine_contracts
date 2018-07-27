/**
 * Contains the raw data for a process definition, as it was retrieved from the process model repository.
 */
export class ProcessDefinitionRaw {
  /**
   * The name under which the process definition is stored.
   */
  public name: string;
  /**
   * The raw xml code for the process definition.
   */
  public xml: string;
}
