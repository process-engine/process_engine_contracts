import {BaseElement} from '../base/index';
import {ConditionExpression} from './condition_expression';

/**
 * Describes a BPMN SequenceFlow element, which is used to connect
 * two FlowNodes together.
 */
export class SequenceFlow extends BaseElement {
  public name: string;
  public sourceRef: string;
  public targetRef: string;
  public conditionExpression?: ConditionExpression;
}
