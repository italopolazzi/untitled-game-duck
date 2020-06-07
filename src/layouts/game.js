import React, { useState, useEffect } from 'react'
import GamePage from '@pages/game/index'

import { Grommet, Main } from 'grommet'

import { Provider } from 'react-redux'

import store from '../store'

import theme from '@/themes/light/index.js'

import GlobalMessages from "@/components/GlobalMessages/index"

const GameLayout = () => {

  return (
    <Provider store={store}>
      <Grommet theme={theme} full cssVars={true}>
        {/* <ThemeContext.Extend value={myTheme} > */}

        <div className="game-layout">
          {/* navigation */}
          <GlobalMessages />
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