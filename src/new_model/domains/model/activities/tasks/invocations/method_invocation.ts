import { Invocation } from './invocation';

export class MethodInvocation extends Invocation {
  public module: string;
  public method: string;
  public params: string;
}
