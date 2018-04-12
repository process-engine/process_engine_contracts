import { RootElement } from '../base/index';
import { Participant } from './participant';

export class Collaboration extends RootElement {
  public participants: Array<Participant> = [];
  public name: string;
}
