import { Task } from "./task";

export class ScriptTask extends Task {
  public scriptFormat: string;
  public script: string;
}