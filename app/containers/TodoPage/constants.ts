import appJSON from '../../../package.json'

export const LOAD_TODOS = `${appJSON.name}/App/LOAD_TODOS`
export const LOAD_TODOS_SUCCESS = `${appJSON.name}/App/LOAD_TODOS_SUCCESS`
export const LOAD_TODOS_ERROR = `${appJSON.name}/App/LOAD_TODOS_ERROR`

export const ADD_TODO = `${appJSON.name}/App/ADD_TODO`
export const ADD_TODO_SUCCESS = `${appJSON.name}/App/ADD_TODO_SUCCESS`
export const ADD_TODO_ERROR = `${appJSON.name}/App/ADD_TODO_ERROR`

export default { LOAD_TODOS, LOAD_TODOS_SUCCESS, LOAD_TODOS_ERROR, ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_ERROR }
