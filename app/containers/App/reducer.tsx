import { ContainerState } from './types'

export const initialState: ContainerState = {
  loading: false,
  error: false,
}

const appReducer = (state: ContainerState = initialState, action: any): any => {
  switch (action.type) {
    default:
      return state
  }
}

export default appReducer
