import {Collaboration, Process} from './types/index';
import {Xmlns} from './xmlns';

export class Definitions {
  public xmlns: Xmlns;
  public id: string;
  public targetNamespace: string;
  public exporter: string;
  public exporterVersion: string;
  public collaboration: Collaboration;
  public processes: Array<Process> = [];
}
