import {IIdentity} from '@essential-projects/iam_contracts';

import {CorrelationProcessModel} from './correlation_process_model';
import {FlowNodeInstanceState} from './flow_node_instance_state';

/**
 * Describes a Correlation.
 */
export class Correlation {
  public id: string;
  public identity: IIdentity;
  public processModels: Array<CorrelationProcessModel>;
  public state: FlowNodeInstanceState;
  public createdAt?: Date;
}
