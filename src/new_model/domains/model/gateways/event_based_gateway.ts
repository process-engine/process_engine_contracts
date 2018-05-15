import { Gateway } from './gateway';
import { BpmnType } from '../../../../constants';

export class EventBasedGateway extends Gateway {
  public get bpmnType(): BpmnType {
    return BpmnType.eventBasedGateway;
  }
}
