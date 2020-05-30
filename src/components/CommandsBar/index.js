import React from 'react'
import { Box, Button } from 'grommet'

import { connect } from 'react-redux'

import * as GameActions from '@store/actions/game'

const CommandsBar = ({ commands, actions, addAction }) => {
  return (
    <Box round="small" direction="row" align="start" justify="start">
      {commands.map((command, command_index) => {
        return <Button
          disabled={actions.length === 8}
          icon={<command.icon />}
          key={command_index}
          onClick={() => { addAction(command) }}
          background="brand"
          pad="small"
          margin={{ horizontal: "xsmall" }} >
        </Button>
      })}
    </Box>
  )
}


const mapStateToProps = state => ({
  commands: state.game.commands,
  actions: state.game.actions
})

const mapDispatchToProps = dispatch => ({
  addAction: command => dispatch(GameActions.addAction(command))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommandsBar)
