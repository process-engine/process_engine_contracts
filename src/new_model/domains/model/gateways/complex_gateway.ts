import { Gateway } from './gateway';
import { BpmnType } from '../../../../constants';

export class ComplexGateway extends Gateway {
  public get bpmnType(): BpmnType {
    return BpmnType.complexGateway;
  }
}
