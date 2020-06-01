import React from 'react'
import { Box } from 'grommet'
import { connect } from 'react-redux'


import * as GameActions from '@store/actions/game'

import { AnimateGroup } from 'react-animation'


import './style.sass'



const ActionsBar = ({ actions, removeAction }) => {

  const items = actions.map((action, action_index) => {
    return (
      <Box
        key={action_index}
        round="small"
        background={action_index === 0 ? 'accent-1' : 'brand'}
        border={action_index === 0 ? { size: 'small', color: 'brand' } : { color: 'accent-1' }}
        pad="small"
        margin={{ vertical: "xsmall" }}
        onClick={() => removeAction(action_index)} >
        {<action.icon />}
      </Box>
    )
  })

  return (
    <>
      <Box responsive={true} direction="column" align="start" justify="start">
        <AnimateGroup
        component={null}
          animation="bounce"
          duration="300"
        >
          {items}
        </AnimateGroup>
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