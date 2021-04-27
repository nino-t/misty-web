import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'

import createReducer from './reducers'
import { InjectedStore, ApplicationRootState } from './types'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

export default function configureStore(
  initialState: ApplicationRootState | Record<string, any> = {},
  history: any
): any {
  let composeEnhancers = compose
  const reduxSagaMonitorOptions = {}
  if (process.env.APP_ENV !== 'production' && typeof window === 'object') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  }

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)
  const { run: runSaga } = sagaMiddleware

  const middlewares = [sagaMiddleware, routerMiddleware(history)]

  const enhancers = [
    applyMiddleware(...middlewares),
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ]

  const store = createStore(createReducer(), initialState as any, composeEnhancers(...enhancers)) as InjectedStore

  store.runSaga = sagaMiddleware.run
  store.injectedReducers = {}
  store.injectedSagas = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      forceReducerReload(store)
    })
  }

  return store
}
