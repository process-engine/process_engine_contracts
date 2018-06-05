import { BaseElement } from '../base/index';
import { ConditionExpression } from './condition_expression';

export class SequenceFlow extends BaseElement {
  public name: string;
  public sourceRef: string;
  public targetRef: string;
  public conditionExpression?: ConditionExpression;
}
