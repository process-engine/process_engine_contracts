import {Runtime} from './index';
import {Model} from './../index';
import { IPredicate } from '../shared';

export interface IRuntimeFascade {
  createProcessToken(data: any): Runtime.Types.ProcessToken;
  createProcessInstance(process: Model.Types.Process): Runtime.Types.ProcessInstance;
  createStartEvent(startEvent: Model.Events.StartEvent,
                   processInstance: Runtime.Types.ProcessInstance,
                   processToken: Runtime.Types.ProcessToken): Runtime.Events.StartEvent;
  queryUserTasks(predicate: IPredicate<Runtime.Activities.UserTask>): Array<Runtime.Activities.UserTask>;
}
