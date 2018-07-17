import {ExtensionElements} from './extension_elements';

export abstract class BaseElement {
  public id: string;
  public documentation?: Array<string>;
  public extensionElements?: ExtensionElements;
}
