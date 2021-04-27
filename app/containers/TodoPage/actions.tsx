import { action } from 'typesafe-actions'
import { TodoInterface as Todo } from './types/todo'
import { LOAD_TODOS_SUCCESS, LOAD_TODOS, LOAD_TODOS_ERROR } from './constants'

export const loadTodos = (accessToken: string): any => action(LOAD_TODOS, { accessToken: accessToken })
export const todosLoaded = (todos: Todo[]): any => action(LOAD_TODOS_SUCCESS, { results: todos })
export const todosLoadingError = (errorMessage: string): any => action(LOAD_TODOS_ERROR, { errorMessage: errorMessage })
