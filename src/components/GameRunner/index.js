import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { Text } from 'grommet'
import * as GameActions from '@store/actions/game'


const updateNeeds = state => {
  const correction = 0.1

  const { current_speed, action_mods, needs, actions } = state
  const current_action = actions[0]


  const needs_mods = current_action ? current_action.action_mods.map(key => action_mods[key]) : [action_mods.nothing];

  const mods_changes = needs_mods.map(mod => {
    const { changes, fill } = mod
    const mod_changes = Object.keys(changes).map(key => {
      const value = changes[key] * current_speed * correction
      const current_need_value = needs[key].value
      const result = current_need_value + value
      let new_need_value = null
      let filled = false

      if (result > 100) {
        new_need_value = 100
        filled = key === fill ? key : false
      } else if (result < 0) {
        new_need_value = 0
      } else {
        new_need_value = result
      }
      needs[key].value = new_need_value
      return filled
    })
    return mod_changes.filter(v => typeof v === "string")[0]
  })



  const have_finished = mods_changes.filter(v => v)[0]

  return [needs, have_finished]
}

const updateActions = (state, have_finished) => {
  const { actions } = state
  if (actions.length) {

    if (have_finished) {
      actions.splice(0, 1)
    } else {
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
  }
  return actions
}

const updateMood = (state) => {
  const percentage = 0.1
  const mood_main_value = Object.values(state.needs).reduce((acc, need) => (percentage * need.value) + acc, 0)

  return {...state.mood, value: mood_main_value}
}

const mountUpdatedStateValues = (game_state) => {
  const [updated_needs, have_finished] = updateNeeds(game_state)
  const updated_actions = updateActions(game_state, have_finished)
  const updated_mood = updateMood(game_state)
  return { actions: updated_actions, needs: updated_needs, mood: updated_mood }
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