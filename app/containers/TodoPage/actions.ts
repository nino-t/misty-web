import { action } from 'typesafe-actions'
import { TodoInterface as Todo } from './types/todo'
import { LOAD_TODOS_SUCCESS, LOAD_TODOS, LOAD_TODOS_ERROR, ADD_TODO, ADD_TODO_SUCCESS } from './constants'

type AddTodoParams = {
  accessToken: string
  description: string
}

/* --- LOAD TODOS --- */
export const loadTodos = (accessToken: string): any => action(LOAD_TODOS, { accessToken: accessToken })
export const todosLoaded = (todos: Todo[]): any => action(LOAD_TODOS_SUCCESS, { results: todos })
export const todosLoadingError = (errorMessage: string): any => action(LOAD_TODOS_ERROR, { errorMessage: errorMessage })

/* --- ADD TODO --- */
export const addTodo = ({ accessToken, description }: AddTodoParams): any => {
  return action(ADD_TODO, {
    serviceName: 'CREATE-TODO',
    accessToken,
    description,
  })
}
export const addTodoSuccess = (result: Todo): any => {
  return action(ADD_TODO_SUCCESS, {
    result,
  })
}
