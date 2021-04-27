import produce from 'immer'
import { ContainerState, ContainerActions } from './types'
import { LOAD_TODOS_SUCCESS, LOAD_TODOS, LOAD_TODOS_ERROR } from './constants'

export const initialState: ContainerState = {
  todos: [],
}

const appReducer = (state: ContainerState = initialState, action: ContainerActions): ContainerState =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_TODOS:
        draft.todos = []
        break

      case LOAD_TODOS_SUCCESS:
        draft.todos = action.payload.todos
        break

      case LOAD_TODOS_ERROR:
        draft.todos = []
        break

      default:
        return state
    }
  })

export default appReducer
