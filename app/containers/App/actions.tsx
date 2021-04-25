import { LOAD_REPOSITORY_SUCCESS, LOAD_REPOSITORY, LOAD_REPOSITORY_ERROR } from './constants'

export function loadRepository(): any {
  return {
    type: LOAD_REPOSITORY,
  }
}

export function repositoryLoaded(repos: any, username: any): any {
  return {
    type: LOAD_REPOSITORY_SUCCESS,
    repos,
    username,
  }
}

export function repositoryLoadingError(error: any): any {
  return {
    type: LOAD_REPOSITORY_ERROR,
    error,
  }
}
