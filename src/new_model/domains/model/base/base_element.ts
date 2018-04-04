import { Documentation } from './index';

export abstract class BaseElement<TId extends string = string> {
  public id: TId;
  // public extensionElements: ExtensionElements;
  public documentation: Array<Documentation>;
}
