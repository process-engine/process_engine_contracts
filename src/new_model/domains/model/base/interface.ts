import { RootElement, Operation } from './index';

export class Interface extends RootElement<InterfaceId> {
  public name: string;
  public operations: Array<Operation>;
  // TODO: see operation
  public implementationReference: any;
}

export type InterfaceId = string;