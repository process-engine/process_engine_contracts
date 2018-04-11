import { Documentation } from './index';

export abstract class BaseElement {
  public id: string;
  // public extensionElements: ExtensionElements;
  public documentation: Array<Documentation>;
}
