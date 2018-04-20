import {IPredicate} from '../shared';
import {Definitions} from './definitions';
import {Model} from './index';

export interface IModelFascade {
  queryStartEvents(predicate: IPredicate<Model.Events.StartEvent>): Array<Model.Events.StartEvent>;
}
