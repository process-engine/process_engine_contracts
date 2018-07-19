import { BpmnType } from '../../constants';
import { Gateway } from './gateway';

export class EventBasedGateway extends Gateway {
  public get bpmnType(): BpmnType {
    return BpmnType.eventBasedGateway;
  }
}
