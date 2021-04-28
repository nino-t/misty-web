import produce from 'immer'
import { ContainerState } from './types'
import { STORE_SERVICE_REQUEST, STORE_SERVICE_REQUEST_SUCCESS, STORE_SERVICE_REQUEST_ERROR } from './constants'

export const initialState: ContainerState = {
  isLoading: false,
  errorMessage: '',
  storeService: {
    serviceName: '',
    isLoading: false,
    errorMessage: '',
  },
}

const appReducer = (state: ContainerState = initialState, action: any): any =>
  produce(state, (draft) => {
    switch (action.type) {
      case STORE_SERVICE_REQUEST:
        const { serviceName } = action.payload

        draft.storeService.serviceName = serviceName
        draft.storeService.isLoading = true
        draft.storeService.errorMessage = ''
        break

      case STORE_SERVICE_REQUEST_SUCCESS:
        draft.storeService.isLoading = false
        draft.storeService.errorMessage = ''
        break

      case STORE_SERVICE_REQUEST_ERROR:
        const { errorMessage } = action.payload

        draft.storeService.isLoading = false
        draft.storeService.errorMessage = errorMessage
        break

      default:
        return state
    }
  })

export default appReducer
