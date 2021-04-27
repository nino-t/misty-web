import produce from 'immer'
import { ContainerState, ContainerActions } from './types'
import { LOAD_TODOS_SUCCESS, LOAD_TODOS, LOAD_TODOS_ERROR } from './constants'

export const initialState: ContainerState = {
  todos: {
    meta: {
      isLoading: false,
      errorMessage: '',
    },
    results: [],
  },
}

const appReducer = (state: ContainerState = initialState, action: ContainerActions): ContainerState =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_TODOS:
        draft.todos.meta.isLoading = true
        draft.todos.meta.errorMessage = ''
        break

      case LOAD_TODOS_SUCCESS:
        const { results } = action.payload

        draft.todos.meta.isLoading = false
        draft.todos.results = results
        draft.todos.meta.errorMessage = ''
        break

      case LOAD_TODOS_ERROR:
        const { errorMessage } = action.payload

        draft.todos.meta.isLoading = false
        draft.todos.meta.errorMessage = errorMessage
        break

      default:
        return state
    }
  })

export default appReducer
