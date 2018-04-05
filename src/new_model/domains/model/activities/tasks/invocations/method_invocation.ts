import { Invocation } from './index';

export class MethodInvocation extends Invocation {
  public module: string;
  public method: string;
  public params: string;
}
