import React, { Fragment } from 'react'
import { Text, Box } from 'grommet'

const ActionsBar = ({ actions, setActions }) => {

  const removeAction = index => setActions(actions.filter((v, i) => i !== index))

  return (
    <Fragment>
      <Text weight="bold">Next action: {actions.length ? actions[0].type : 'Nenhuma'}</Text>
      {actions.length === 8 ? <Text weight="normal" color="red" >Fila cheia</Text> : null}

      <Box responsive={true} direction="column-reverse" align="start" justify="start">
        {actions.map((action, action_index) => {
          return (
            <Box
              key={action_index}
              round="small"
              background={action_index === 0 ? false : 'brand'}
              border={action_index === 0 ? { size: 'small', color: 'brand' } : false}
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

export default ActionsBar