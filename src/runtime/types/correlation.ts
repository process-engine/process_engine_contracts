import {FlowNodeInstanceState} from './flow_node_instance_state';
import {ProcessDefinitionFromRepository} from './process_definition_from_repository';

/**
 * Describes a Correlation with an active ProcessInstance.
 */
export class Correlation {
  public id: string;
  public processModels: Array<ProcessDefinitionFromRepository>;
  public state: FlowNodeInstanceState;
  public createdAt?: Date;
}
