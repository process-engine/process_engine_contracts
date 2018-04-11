import {IPredicate} from '../shared';
import {Model} from './../index';
import {Runtime} from './index';

export interface IRuntimeFascade {
  createProcessToken(data: any): Runtime.Types.ProcessToken;
  createProcessInstance(process: Model.Types.Process): Runtime.Types.ProcessInstance;
  createStartEvent(startEvent: Model.Events.StartEvent,
                   processInstance: Runtime.Types.ProcessInstance,
                   processToken: Runtime.Types.ProcessToken): Runtime.Events.StartEvent;
  queryUserTasks(predicate: IPredicate<Runtime.Activities.UserTask>): Array<Runtime.Activities.UserTask>;
}
