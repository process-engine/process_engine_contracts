import {CamundaExecutionListener} from './camunda_execution_listener';
import {CamundaExtensionProperty} from './camunda_extension_property';

export class ExtensionElements {
  public camundaExecutionListener?: CamundaExecutionListener;
  public camundaExtensionProperties?: Array<CamundaExtensionProperty> = [];
}
