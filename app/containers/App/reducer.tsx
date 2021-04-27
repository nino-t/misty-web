import { ContainerState } from './types'

export const initialState: ContainerState = {
  isLoading: false,
  errorMessage: '',
}

const appReducer = (state: ContainerState = initialState, action: any): any => {
  switch (action.type) {
    default:
      return state
  }
}

export default appReducer
