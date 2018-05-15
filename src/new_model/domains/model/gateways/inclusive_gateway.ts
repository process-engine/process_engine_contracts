import { Gateway } from './gateway';
import { BpmnType } from '../../../../constants';

export class InclusiveGateway extends Gateway {
  public get bpmnType(): BpmnType {
    return BpmnType.inclusiveGateway;
  }
}
