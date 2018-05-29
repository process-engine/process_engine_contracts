import { BpmnType } from '../../../constants';
import {Event} from './event';

export class BoundaryEvent extends Event {
  public get bpmnType(): BpmnType {
    return BpmnType.boundaryEvent;
  }
  public cancelActivity: boolean;
  public attachedToRef: string;
}
