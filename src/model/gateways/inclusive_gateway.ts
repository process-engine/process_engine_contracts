import { BpmnType } from '../../constants';
import { Gateway } from './gateway';

export class InclusiveGateway extends Gateway {
  public get bpmnType(): BpmnType {
    return BpmnType.inclusiveGateway;
  }
}
