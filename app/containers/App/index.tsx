import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import DashboardPage from '../../containers/DashboardPage/Loadable'
import TodoPage from '../../containers/TodoPage/Loadable'

import GlobalStyle from '../../global-styles'

const AppWrapper = styled.div`
  margin: 0 auto;
`

export default function App(): JSX.Element {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="React.js Boilerplate">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/todos" component={TodoPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  )
}
