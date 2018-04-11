import {FlowElement, RootElement} from '../base/index';

export class Process extends RootElement {
  public id: string;
  public items: Array<FlowElement> = [];
  public laneSets: Array<FlowElement> = [];
  public name: string;
}
