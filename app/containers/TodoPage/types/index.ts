import { ActionType } from 'typesafe-actions'

import * as actions from '../actions'
import { TodosServiceInterface as TodosService } from './todo'

/* --- STATE --- */
interface TodoState {
  readonly todos: TodosService
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>

/* --- EXPORTS --- */

type ContainerState = TodoState
type ContainerActions = AppActions

export type { ContainerState, ContainerActions }
