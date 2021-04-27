import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectGlobal = (state: any): any => state.global || initialState

const selectRouter = (state: any): any => state.router

const makeSelectLoading = (): any => createSelector(selectGlobal, (globalState) => globalState.isLoading)

const makeSelectError = (): any => createSelector(selectGlobal, (globalState) => globalState.errorMessage)

const makeSelectLocation = (): any => createSelector(selectRouter, (routerState) => routerState.location)

export { selectGlobal, makeSelectLoading, makeSelectError, makeSelectLocation }
