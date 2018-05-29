import {Event} from './event';
import { BpmnType } from '../../../../constants';

export class BoundaryEvent extends Event {
  public get bpmnType(): BpmnType {
    return BpmnType.boundaryEvent;
  }
  public cancelActivity: boolean;
  public attachedToRef: string;
}
