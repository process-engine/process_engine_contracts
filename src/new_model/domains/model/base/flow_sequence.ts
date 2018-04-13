import { BaseElement } from './base_element';
import { ConditionExpression } from './condition_expression';

export abstract class FlowSequence extends BaseElement {
  public name: string;
  public sourceRef: string;
  public targetRef: string;
  public conditionExpression: ConditionExpression;
}
