import {FlowElement, RootElement} from '../base/index';

export class Process extends RootElement {
  public name: string;
  public isExecutable: boolean;
  public laneSets: Array<FlowElement> = [];
  public flowElements: Array<FlowElement> = [];
}
