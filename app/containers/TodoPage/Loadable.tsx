import React from 'react'
import loadable from '../../utils/loadable'
import LoadingIndicator from '../../components/LoadingIndicator'

class Loadable extends React.Component {
  render(): JSX.Element {
    return loadable(() => import('./index'), {
      fallback: <LoadingIndicator />,
    })
  }
}

export default Loadable
