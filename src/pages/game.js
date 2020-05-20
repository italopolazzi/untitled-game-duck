import React, { Fragment, useEffect, useState } from 'react'

import { map } from 'redux'
import { connect } from 'react-redux'

import { Spa, Restroom, Gamepad, Cafeteria, Trigger, Aed, Group } from 'grommet-icons'


import { Box, Grid, Text } from 'grommet'

import CanvasContainer from '@components/CanvasContainer'

const ActionsBar = ({ actions, setActions }) => {

  const removeAction = index => setActions(actions.filter((v, i) => i !== index))

  return (
    <Fragment>
      <Text weight="bold">Next action: {actions.length ? actions[0].type : 'Nenhuma'}</Text>
      {actions.length === 8 ? <Text weight="normal" color="red" >Fila cheia</Text> : null}

      <Box direction="column-reverse" align="start" justify="start">
        {actions.map((action, action_index) => {
          return (
            <Box
              key={action_index}
              round="small"
              background={action_index === 0 ? 'accent-1' : 'brand'}
              pad="small"
              margin={{ vertical: "xsmall" }}
              onClick={() => removeAction(action_index)} >
              {<action.icon />}
            </Box>
          )
        })}
      </Box>
    </Fragment>
  )
}

const CommandsBar = ({ commands, actions, setActions, setClicked }) => {

  const addAction = action => {
    if (actions.length < 8) {
      setClicked(action.type)
      setActions([...actions, action])
    }
  }



  return (
    <Box round="small" direction="row" align="start" justify="start">
      {commands.map((command, command_index) => {
        return <Box
          key={action_type_index}
          onClick={() => addAction(command)}
          background="brand"
          pad="small"
          margin={{ horizontal: "xsmall" }} >
          {<command.icon />}
        </Box>
      })}
    </Box>
  )
}


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
    <Fragment>
      <Box direction="column" align="center" justify="center">
        <ActionsBar actions={actions} setActions={setActions} />
        <CanvasContainer clicked={clicked} />
        <CommandsBar setClicked={setClicked} actions={actions} commands={commands} setActions={setActions} />
      </Box>
    </Fragment>
  )
}



export default connect(state => ({ test: state.game.test }))(GamePage)