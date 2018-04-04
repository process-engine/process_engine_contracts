import { Task } from "./index";
import { OperationReference } from "../type_references/index";

export class ServiceTask extends Task {
  public implementation: string;
  public operationReference: OperationReference;
}