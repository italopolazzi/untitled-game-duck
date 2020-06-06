
import initialState from '@store/state/game'

import {
  CURRENT_ACTION_INDEX
} from '@/data/constants.js'


const cases = {
  ADD_ACTION: (state, action) => {
    if (state.actions.length < 6) {
      state.actions = [...state.actions, { ...action.payload }]
      return { ...state }
    } else {
      alert("Fullfied actions stack")
      return state
    }
  },
  REMOVE_ACTION: (state, action) => {
    const { actions } = state
    const index = action.payload
    const action_to_remove = actions[index]

    if (index === CURRENT_ACTION_INDEX) {
      /**
       *  the user removed the current action
       *  then the action timeout should be cleaned
       *  to prevent remove another action when the
       *  time is up
       */
      clearTimeout(action_to_remove.timeout)
    }

    actions.splice(index, 1)
    const new_actions = [...actions]
    return { ...state, actions: new_actions }
  },
  SET_ACTIONS: (state, action) => {
    return { ...state, actions: [...action.payload] }
  },
  ACTIVATE_CURRENT_ACTION: (state, action) => {
    const { actions } = state
    actions[CURRENT_ACTION_INDEX] = action.payload
    return { ...state, actions }
  },
  SET_NEEDS: (state, action) => {
    return { ...state, needs: { ...action.payload } }
  },
  SET_CURRENT_SPEED: (state, action) => {
    return { ...state, current_speed: action.payload }
  },
  SET_MOOD: (state, action) => {
    return { ...state, mood: action.payload }
  },
  REMOVE_MOOD_MOD: (state, action) => {
    const { mood } = state
    mood.mods[action.payload] = undefined
    return { ...state, mood }
  },
  ADD_MOOD_MOD: (state, action) => {
    const { mood } = state
    const mood_mod = action.payload
    mood.mods[mood_mod.label] = mood_mod
    return { ...state, mood }
  }
}

const reducer = (state = initialState, action) => {
  const handler = cases[action.type]
  return handler ? handler(state, action) : state
}

export default reducer