import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectGlobal = (state: any): any => state.global || initialState

const selectRouter = (state: any): any => state.router

const makeSelectCurrentUser = (): any => createSelector(selectGlobal, (globalState) => globalState.currentUser)

const makeSelectLoading = (): any => createSelector(selectGlobal, (globalState) => globalState.loading)

const makeSelectError = (): any => createSelector(selectGlobal, (globalState) => globalState.error)

const makeSelectLocation = (): any => createSelector(selectRouter, (routerState) => routerState.location)

export { selectGlobal, makeSelectCurrentUser, makeSelectLoading, makeSelectError, makeSelectLocation }
