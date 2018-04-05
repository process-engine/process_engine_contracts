import { RootElement } from '../base/index';
import { Participant } from './index';

export class Collaboration extends RootElement<CollaborationId> {
  public participants: Array<Participant> = [];
  public name: string;
}

export type CollaborationId = string;
