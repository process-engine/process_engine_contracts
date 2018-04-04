import {Model} from './index'
import { Definitions } from './definitions';
import { IPredicate } from '../shared';

export interface IModelFascade {
  queryStartEvents(predicate: IPredicate<Model.Events.StartEvent>): Array<Model.Events.StartEvent>;
}
