import React, { Fragment } from 'react'
import { Text, Box } from 'grommet'
import { connect } from 'react-redux'


import * as GameActions from '@store/actions/game'

const ActionsBar = ({ actions, removeAction }) => {
  return (
    <>
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
    </>
  )
}

const mapStateToProps = state => ({
  actions: state.game.actions
})

const mapDispatchToProps = dispatch => ({
  removeAction: action_index => dispatch(GameActions.removeAction(action_index))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActionsBar)