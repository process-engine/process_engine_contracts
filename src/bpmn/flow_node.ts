
export class BaseElement {
  public id: string;
  // public extensionElements: ExtensionElements;
  public documentation: Array<Documentation>;
}

export class FlowElement extends BaseElement {
  public name: string;
}

export class FlowNode extends FlowElement {
  public incoming: Array<any>;
  public outgoing: Array<any>;
}

export class Documentation {
  public id: string;
  public documentation: string; // not defined in XML
}