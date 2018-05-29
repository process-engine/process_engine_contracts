import { BpmnType } from '../../../constants';
import { Gateway } from './gateway';

export class ExclusiveGateway extends Gateway {
  public get bpmnType(): BpmnType {
    return BpmnType.exclusiveGateway;
  }
}
