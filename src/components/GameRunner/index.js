import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { Text } from 'grommet'
import * as GameActions from '@store/actions/game'

const updateNeeds = state => {
  const { current_speed, mods, needs, actions } = state
  const current_action = actions[0]
  const needs_mods = current_action ? current_action.mods.map(key => mods[key]) : [mods.nothing];
  const correction = 0.1

  needs_mods.forEach(mod => {
    Object.keys(mod).forEach(key => {
      const value = mod[key] * current_speed * correction
      const current_need_value = needs[key].value
      const result = current_need_value + value
      if (result > 100) {
        needs[key].value = 100
      } else if (result < 0) {
        needs[key].value = 0
      } else {
        needs[key].value = result
      }
    })
  })
  return needs
}

const updateActions = state => {
  const { actions } = state
  if (actions.length) {
    const current_action = actions[0]
    // removes the first action (current action) if it's expired
    // else updates the actions with the new times value
    if (current_action.times <= 0) {
      actions.splice(0, 1)
    }
    // decrement 'times' to expire the action during current_speed
    else if (current_action.times) {
      actions[0].times -= state.current_speed
    }

  }
  return actions
}

const mountUpdatedStateValues = (game_state) => {
  const updated_needs = updateNeeds(game_state)
  const updated_actions = updateActions(game_state)
  return { actions: updated_actions, needs: updated_needs }

}

const GameRunner = ({ updateGame, game_state }) => {

  useEffect(() => {
    const interval = setInterval(() => {
      const updated_state_values = mountUpdatedStateValues(game_state)
      updateGame(updated_state_values)
    }, 1000);
    return () => clearInterval(interval)

  }, [game_state])


  return <Text weight="bold">{game_state.current_speed}</Text>
}

const mapStateToProps = state => ({ game_state: state.game })

const mapDispatchToProps = dispatch => ({
  updateGame: updated_state_values => dispatch(GameActions.updateGame(updated_state_values))
})

export default connect(mapStateToProps, mapDispatchToProps)(GameRunner)