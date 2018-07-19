import { BpmnType } from '../../constants';
import { Gateway } from './gateway';

export class ParallelGateway extends Gateway {
  public get bpmnType(): BpmnType {
    return BpmnType.parallelGateway;
  }
}
