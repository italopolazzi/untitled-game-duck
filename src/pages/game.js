import React from 'react'

import CanvasContainer from '@components/CanvasContainer'
import ActionsBar from '@components/ActionsBar'
import NeedsBar from '@components/NeedsBar'
import CommandsBar from '@components/CommandsBar'

const GamePage = (props) => {
  return (
    <div className="game-page" >
      <ActionsBar className="actions-bar" />
      <CanvasContainer className="canvas-container" />
      <CommandsBar className="commands-bar" />
      <NeedsBar className="needs-bar" />
    </div>
  )
}

export default GamePage