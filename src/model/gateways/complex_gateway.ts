import { BpmnType } from '../../constants';
import { Gateway } from './gateway';

export class ComplexGateway extends Gateway {
  public get bpmnType(): BpmnType {
    return BpmnType.complexGateway;
  }
}
