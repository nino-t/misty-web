import * as React from 'react'
import * as ReactDOM from 'react-dom'

const App = () => {
  return <div>WELCOME TO REACT APP</div>
}

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}