import { Operation } from '../types/index';
import { RootElement } from './root_element';

export class Interface extends RootElement {
  public name: string;
  public operations: Array<Operation>;
  // TODO: see operation
  public implementationReference: any;
}
