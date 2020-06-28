import React from 'react'
import { Grommet, Button } from 'grommet'
import { Provider } from 'react-redux'
import theme from '@/themes/light/index.js'
import store from '@/store'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import StartGamePage from '@/pages/start-game'
import GamePage from '@/pages/game'
import HomePage from '@/pages/home'

import Info from '@/components/Info'

const Pages = () => {
  return (
    <Provider store={store}>
      <Grommet theme={theme} full cssVars={true}>
        <div id="pages">
          <Info />
          <BrowserRouter>
            <Switch>
              <Route component={HomePage} path="/" exact />
              <Route component={StartGamePage} path="/start-game" />
              <Route component={GamePage} path="/game" />
            </Switch>
          </BrowserRouter>
        </div>
      </Grommet >
    </Provider>
  )
}

export default Pages