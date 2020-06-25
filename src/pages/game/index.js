import React from 'react'
import { Main } from 'grommet'
import GlobalMessages from "@/components/GlobalMessages/index"


import GameRunner from '@/components/game/GameRunner'
import PortraitGameTemplate from '@/templates/game/PortraitGameTemplate'
import LandscapeGameTemplate from '@/templates/game/LandscapeGameTemplate'
import { useMediaQuery } from 'react-responsive'

import './style.sass'

const Game = (props) => {
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  return (
    <>
      <div id="game-runner"><GameRunner /></div>
      <div id="game-template" >
        {isPortrait ? <PortraitGameTemplate /> : <LandscapeGameTemplate />}
      </div>
    </>
  )
}

const GamePage = () => {
  return (
    <div id="game-container">
      {/* navigation */}
      <GlobalMessages />
      <section id="game">
        <Main pad="false" background="brand" >
          <Game />
        </Main>
      </section>
    </div>
  )
}

export default GamePage