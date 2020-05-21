import React, { useState, useEffect } from 'react'
import GamePage from '@pages/game'

import { Grommet, Main } from 'grommet'

import { Provider } from 'react-redux'

import store from '../store'

const GameLayout = () => {

  return (
    <Provider store={store}>
      <Grommet full cssVars={true}>
        {/* <ThemeContext.Extend value={myTheme} > */}

        <div className="game-layout">
          {/* navigation */}

          <section id="main-content">
            <Main pad="false" background="brand" >
              <GamePage />
            </Main>
          </section>
        </div>

      </Grommet >
    </Provider>
  )
}

export default GameLayout