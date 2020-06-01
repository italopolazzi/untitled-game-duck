import React from 'react'

import CanvasContainer from '@components/CanvasContainer'
import MoodBar from '@components/MoodBar'
import ActionsBar from '@components/ActionsBar'
import NeedsBar from '@components/NeedsBar'
import TimeBar from '@components/TimeBar'

import './style.sass'

const GamePage = (props) => {
  return (
    <div className="game-page grid-component" >

      <div className="side-bar">
        <ActionsBar />
        <MoodBar />
      </div>


      <div className="canvas-container">
        <CanvasContainer />
      </div>

      <div className="needs-bar">
        <NeedsBar />
      </div>

      <div className="time-bar">
        <TimeBar />
      </div>

    </div>
  )
}

export default GamePage