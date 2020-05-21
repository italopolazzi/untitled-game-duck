import React from 'react'
import { Box } from 'grommet'

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
          key={command_index}
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

export default CommandsBar