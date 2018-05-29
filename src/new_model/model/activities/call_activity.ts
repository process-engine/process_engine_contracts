import { BpmnType } from '../../../constants';
import {Activity} from './activity';

export class CallActivity extends Activity {
  public get bpmnType(): BpmnType {
    return BpmnType.callActivity;
  }
  public type: CallActivityType = CallActivityType.Unspecified;
  public calledReference?: string;
  public bindingType: CallActivityBindingType = CallActivityBindingType.deployment;
  public calledElementVersion?: string;
  public calledElementTenantId: string;
  public delegateVariableMapping: CallActivityDelegateVariableMapping = CallActivityDelegateVariableMapping.Unspecified;
  public variableMappingValue?: String;
}

export enum CallActivityType {
  Unspecified = 0,
  BPMN = 1,
  // CMMN = 2, - Not supported yet
}

export enum CallActivityBindingType {
  latest = 0,
  deployment = 1,
  version = 2,
}

export enum CallActivityDelegateVariableMapping {
  Unspecified = 0,
  variableMappingClass = 1,
  variableMappingDelegateExpression = 2,
}
