import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import createReducer from './reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

export default function configureStore(initialState = {}, history: any): any {
  let composeEnhancers = compose
  // const reduxSagaMonitorOptions = {}
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  }

  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware, routerMiddleware(history)]

  const enhancers = [applyMiddleware(...middlewares)]

  const store = createStore(createReducer(), initialState, composeEnhancers(...enhancers))

  // store.runSaga = sagaMiddleware.run
  // store.injectedReducers = {}
  // store.injectedSagas = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer())
    })
  } else {
    store.replaceReducer(createReducer())
  }

  return store
}
