import {BaseElement} from './../base/index';

export abstract class Event extends BaseElement {
  public name: string;
  public incoming: Array<string> = [];
}
