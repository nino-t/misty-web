import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Button from './components/Button'

const App = () => {
  return (
    <div>
      <Button />
      <div>WELCOME TO REACT APP</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
