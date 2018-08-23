import {IProcessTokenFacade} from './iprocess_token_facade';

export interface IProcessTokenFacadeFactory {
  create(processInstanceId: string, processModelId: string, correlationId: string, identity: any): IProcessTokenFacade;
}
