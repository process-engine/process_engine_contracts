import { RootElement } from "../base/index";
import { Participant } from "./index";

export class Collaboration extends RootElement<CollaborationId> {
  public participants: Array<Participant> = [];
}

export type CollaborationId = string;