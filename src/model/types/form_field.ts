import {EnumValue} from './enum_value';

export class FormField {
  public id: string;
  public label: string;
  public type: string;
  public defaultValue: string;
  public enumValues?: Array<EnumValue>;
  public preferredControl?: string;
}
