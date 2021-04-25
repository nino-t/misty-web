import produce from 'immer'
import { LOAD_REPOSITORY_SUCCESS, LOAD_REPOSITORY, LOAD_REPOSITORY_ERROR } from './constants'

export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
}

const appReducer = (state = initialState, action: any): any =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_REPOSITORY:
        draft.loading = true
        draft.error = false
        break

      case LOAD_REPOSITORY_SUCCESS:
        draft.loading = false
        draft.currentUser = action.username
        break

      case LOAD_REPOSITORY_ERROR:
        draft.error = action.error
        draft.loading = false
        break
    }
  })

export default appReducer
