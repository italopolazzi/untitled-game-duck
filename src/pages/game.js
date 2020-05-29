import React from 'react'

import CanvasContainer from '@components/CanvasContainer'
import ActionsBar from '@components/ActionsBar'
import NeedsBar from '@components/NeedsBar'
import CommandsBar from '@components/CommandsBar'
import TimeBar from '@components/TimeBar'

import { Grid } from 'grommet'

const GamePage = (props) => {
  return (
    <div className="game-page grid-component" >
      
      <div className="actions-bar">
        <ActionsBar />
      </div>

      <div className="canvas-container">
        <CanvasContainer />
      </div>

      <div className="time-bar">
        <TimeBar />
      </div>

      <div className="needs-bar">
        <NeedsBar />
      </div>

      <div className="commands-bar">
        <CommandsBar />
      </div>

    </div>

    // <Grid pad="small" rows={["full", "full", "full", "full"]} columns={["full", "full", "full", "full"]} areas={[{ "name": "actions", "start": [0, 0], "end": [1, 3] }, { "name": "canvas", "start": [1, 0], "end": [3, 1] }, { "name": "time", "start": [1, 1], "end": [2, 2] }, { "name": "commands", "start": [1, 2], "end": [2, 3] }, { "name": "needs", "start": [2, 1], "end": [3, 3] }]}>
    //   <ActionsBar gridArea="actions" className="actions-bar" />
    //   <CanvasContainer gridArea="canvas" className="canvas-container" />
    //   <CommandsBar gridArea="commands" className="commands-bar" />
    //   <NeedsBar gridArea="needs" className="needs-bar" />
    //   <TimeBar gridArea="time" className="time-bar" />

    // </Grid>
  )
}

export default GamePage