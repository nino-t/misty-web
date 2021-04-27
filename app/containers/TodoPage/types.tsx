import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

/* --- STATE --- */
interface TodoState {
  readonly todos: any[]
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>

/* --- EXPORTS --- */

type ContainerState = TodoState
type ContainerActions = AppActions

export type { ContainerState, ContainerActions }
