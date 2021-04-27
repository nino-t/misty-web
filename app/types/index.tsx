import { Reducer, Store } from 'redux'
import { RouterState } from 'connected-react-router'
import { Saga } from 'redux-saga'
import { SagaInjectionModes } from 'redux-injectors'

import { ContainerState as AppState } from '../containers/App/types'
import { ContainerState as TodoContainerState } from '../containers/TodoPage/types'

export interface InjectedStore extends Store {
  injectedReducers: any
  injectedSagas: any
  runSaga(saga: any): any
}

export interface InjectReducerParams {
  key: keyof ApplicationRootState
  reducer: Reducer<any, any>
}

export interface InjectSagaParams {
  key: keyof ApplicationRootState
  saga: Saga
  mode?: SagaInjectionModes
}

export interface ApplicationRootState {
  readonly router: RouterState
  readonly global: AppState
  readonly todoContainer: TodoContainerState

  // For testing purposes
  readonly test: any
}
