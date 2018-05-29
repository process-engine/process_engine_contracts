import { Gateway } from './gateway';
import { BpmnType } from '../../../../constants';

export class ExclusiveGateway extends Gateway {
  public get bpmnType(): BpmnType {
    return BpmnType.exclusiveGateway;
  }
}
