import React, { Fragment, useState } from 'react'

import { connect } from 'react-redux'

import { Restroom, Gamepad, Cafeteria, Trigger, Aed, Group } from 'grommet-icons'

import CanvasContainer from '@components/CanvasContainer'
import ActionsBar from '@components/ActionsBar'
import NeedsBar from '@components/NeedsBar'
import CommandsBar from '@components/CommandsBar'

const GamePage = ({ test }) => {
  const commands = [
    {
      type: 'baddler',
      icon: Restroom
    },
    {
      type: 'fun',
      icon: Gamepad
    },
    {
      type: 'hunger',
      icon: Cafeteria
    },
    {
      type: 'social',
      icon: Group
    },
    {
      type: 'energy',
      icon: Trigger
    },
    {
      type: 'hygiene',
      icon: Aed
    }
  ]
  const [clicked, setClicked] = useState("não clicou ainda")
  const [actions, setActions] = useState([])

  return (
    <div className="game-page" >
      <ActionsBar className="actions-bar" actions={actions} setActions={setActions} />
      <CanvasContainer className="canvas-container" clicked={clicked} />
      <CommandsBar className="commands-bar" setClicked={setClicked} actions={actions} commands={commands} setActions={setActions} />
      <NeedsBar className="needs-bar" />
    </div>
  )
}



export default connect(state => ({ test: state.game.test }))(GamePage)