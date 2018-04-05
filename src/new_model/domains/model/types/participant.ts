import { BaseElement } from '../base/index';
import { ProcessReference } from '../type_references/index';

export class Participant extends BaseElement<ParticipantId> {
  public name: string;
  public processReference: ProcessReference;
}

export type ParticipantId = string;
