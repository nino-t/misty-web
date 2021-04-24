import './app.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Button from './components/Button'

const App = () => {
  return (
    <div>
      <Button />
      <h1 className="bg-red-900 text-white">Hello world</h1>
      <div>WELCOME TO REACT APP</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
