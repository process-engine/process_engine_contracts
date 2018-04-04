import { FlowElement } from '../base/index';

export class Process {
  public id: ProcessId;
  public items: Array<FlowElement> = [];
  public laneSets: Array<FlowElement> = [];
  public name: string;
}

export type ProcessId = string;
