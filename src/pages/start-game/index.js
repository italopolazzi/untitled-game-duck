import React from 'react'
import { Grommet, Main } from 'grommet'
import { Provider } from 'react-redux'
import store from '@/store'
import theme from '@/themes/light/index.js'
import GlobalMessages from "@/components/GlobalMessages"

import PortraitGameTemplate from '@/templates/start-game/PortraitGameTemplate'
import LandscapeGameTemplate from '@/templates/start-game/LandscapeGameTemplate'
import { useMediaQuery } from 'react-responsive'

import './style.sass'

const StartGame = (props) => {
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  return (
    <>
      <div id="start-game-template" >
        {isPortrait ? <PortraitGameTemplate /> : <LandscapeGameTemplate />}
      </div>
    </>
  )
}

const GamePage = () => {
  return (
    <Provider store={store}>
      <Grommet theme={theme} full cssVars={true}>
        <div id="start-game-container">
          {/* navigation */}
          <GlobalMessages />
          <section id="game">
            <Main pad="false" background="brand" >
              <StartGame />
            </Main>
          </section>
        </div>

      </Grommet >
    </Provider>
  )
}

export default GamePage