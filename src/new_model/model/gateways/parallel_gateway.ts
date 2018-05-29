import { Gateway } from './gateway';
import { BpmnType } from '../../../../constants';

export class ParallelGateway extends Gateway {
  public get bpmnType(): BpmnType {
    return BpmnType.parallelGateway;
  }
}
