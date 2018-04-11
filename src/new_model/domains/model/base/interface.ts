import { Operation } from '../types/index';
import { RootElement } from './index';

export class Interface extends RootElement {
  public name: string;
  public operations: Array<Operation>;
  // TODO: see operation
  public implementationReference: any;
}

export type InterfaceId = string;
