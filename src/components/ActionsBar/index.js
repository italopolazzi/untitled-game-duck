import React from 'react'
import { Box, Button } from 'grommet'
import { connect } from 'react-redux'


import * as GameActions from '@store/actions/game'

import Icon from '@mdi/react'

import './style.sass'
import { CSSTransition, TransitionGroup } from 'react-transition-group'



const ActionsBar = ({ actions, removeAction, flex }) => {

  const items = actions.map((action, action_index) => {
    return (
      <CSSTransition
        key={action_index}
        timeout={300}
        classNames="slidex"
        unmountOnExit
        appear>
        <Button
          title={action.type}
          margin="xsmall"
          onClick={() => removeAction(action_index)}
          icon={<Icon path={action.icon} size={1} />} />

      </CSSTransition>


    )
  })

  return (
    <>
      <Box
        fill
        responsive={true}
        {...flex}
      >
        <TransitionGroup component={null}>
          {items}
        </TransitionGroup>
      </Box>
      {/* <div class="circle">
        <TransitionGroup component={null}>
          {items}
        </TransitionGroup>
      </div> */}
    </>
  )
}

const mapStateToProps = (state, ownProps) => ({
  actions: state.game.actions,
  ...ownProps
})

const mapDispatchToProps = dispatch => ({
  removeAction: action_index => dispatch(GameActions.removeAction(action_index))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActionsBar)