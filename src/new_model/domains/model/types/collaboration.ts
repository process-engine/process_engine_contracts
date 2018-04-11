import { RootElement } from '../base/index';
import { Participant } from './index';

export class Collaboration extends RootElement {
  public participants: Array<Participant> = [];
  public name: string;
}
