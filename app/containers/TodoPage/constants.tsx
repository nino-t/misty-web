import appJSON from '../../../package.json'

export const LOAD_TODOS = `${appJSON.name}/App/LOAD_TODOS`
export const LOAD_TODOS_SUCCESS = `${appJSON.name}/App/LOAD_TODOS_SUCCESS`
export const LOAD_TODOS_ERROR = `${appJSON.name}/App/LOAD_TODOS_ERROR`

export default { LOAD_TODOS, LOAD_TODOS_SUCCESS, LOAD_TODOS_ERROR }
