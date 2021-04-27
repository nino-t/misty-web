import { createSelector } from 'reselect'
import { ApplicationRootState } from '../../types'
import { initialState } from './reducer'

const selectTodo = (state: ApplicationRootState): any => state.todo || initialState

const makeSelectTodos = (): any => createSelector(selectTodo, (substate) => substate.todos)

export { selectTodo, makeSelectTodos }
