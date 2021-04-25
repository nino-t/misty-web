import appJSON from '../../../package.json'

export const LOAD_REPOSITORY = `${appJSON.name}/App/LOAD_REPOSITORY`
export const LOAD_REPOSITORY_SUCCESS = `${appJSON.name}/App/LOAD_REPOSITORY_SUCCESS`
export const LOAD_REPOSITORY_ERROR = `${appJSON.name}/App/LOAD_REPOSITORY_ERROR`

export default { LOAD_REPOSITORY, LOAD_REPOSITORY_SUCCESS, LOAD_REPOSITORY_ERROR }
