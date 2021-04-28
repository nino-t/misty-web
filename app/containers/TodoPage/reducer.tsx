import produce from 'immer'
import { ContainerState, ContainerActions } from './types'
import { LOAD_TODOS_SUCCESS, LOAD_TODOS, LOAD_TODOS_ERROR, ADD_TODO_SUCCESS } from './constants'

export const initialState: ContainerState = {
  todos: {
    meta: {
      isLoading: false,
      errorMessage: '',
    },
    results: [],
  },
}

const todoReducer = (state: ContainerState = initialState, action: ContainerActions): ContainerState =>
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

      case ADD_TODO_SUCCESS:
        const { result } = action.payload

        draft.todos.results.push(result)
        break

      default:
        return state
    }
  })

export default todoReducer
