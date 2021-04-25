import './app.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import history from './utils/history'

import App from './containers/App'

import { HelmetProvider } from 'react-helmet-async'

import configureStore from './configureStore'

const initialState = {}
const store = configureStore(initialState, history)
const MOUNT_NODE = document.getElementById('root') as HTMLElement

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  )
}

if (module.hot) {
  module.hot.accept()
  render()
} else {
  render()
}
