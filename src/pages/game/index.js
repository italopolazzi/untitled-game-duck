import React from 'react'

import GameRunner from '@components/GameRunner'

import PortraitGameTemplate from './templates/PortraitGameTemplate'
import LandscapeGameTemplate from './templates/LandscapeGameTemplate'

import { useMediaQuery } from 'react-responsive'

import './style.sass'

const GamePage = (props) => {

  const isPortrait = useMediaQuery({ orientation: 'portrait' })

  return (
    <>
      <div className="game-runner"><GameRunner /></div>
      <div className="game-page" >
        {isPortrait ? <PortraitGameTemplate /> : <LandscapeGameTemplate />}
      </div>
    </>
  )
}

export default GamePage