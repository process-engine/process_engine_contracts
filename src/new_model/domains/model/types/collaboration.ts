import { RootElement } from '../base/index';
import { Participant } from './participant';

export class Collaboration extends RootElement {
  public name: string;
  public participants: Array<Participant> = [];
}
