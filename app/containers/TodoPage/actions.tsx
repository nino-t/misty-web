import { action } from 'typesafe-actions'
import { LOAD_TODOS_SUCCESS, LOAD_TODOS, LOAD_TODOS_ERROR } from './constants'

export const loadTodos = (accessToken: string): any => action(LOAD_TODOS, { accessToken: accessToken })
export const todosLoaded = (todos: any[]): any => action(LOAD_TODOS_SUCCESS, { todos: todos })
export const todosLoadingError = (error: any): any => action(LOAD_TODOS_ERROR, { error: error })
