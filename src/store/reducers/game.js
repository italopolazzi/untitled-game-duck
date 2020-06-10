
import initialState from '@/store/state/game'

import {
  CURRENT_ACTION_INDEX
} from '@/data/constants.js'


const cases = {
  REMOVE_GLOBAL_MESSAGE: (state, payload) => {
    const { global_messages } = state
    global_messages.splice(payload, 1)
    const new_global_messages = [...global_messages]
    return { ...state, global_messages: new_global_messages }
  },
  ADD_GLOBAL_MESSAGE: (state, payload) => {
    const messages = [...state.global_messages, payload]
    return { ...state, global_messages: messages }
  },
  ADD_ACTION: (state, payload) => {
    state.actions = [...state.actions, { ...payload }]
    return { ...state }
  },
  REMOVE_ACTION: (state, payload) => {
    const { actions } = state
    const index = payload
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
  SET_ACTIONS: (state, payload) => {
    return { ...state, actions: [...payload] }
  },
  ACTIVATE_CURRENT_ACTION: (state, payload) => {
    const { actions } = state
    actions[CURRENT_ACTION_INDEX] = payload
    return { ...state, actions }
  },
  SET_NEEDS: (state, payload) => {
    return { ...state, needs: { ...payload } }
  },
  SET_CURRENT_SPEED: (state, payload) => {
    return { ...state, current_speed: payload }
  },
  SET_MOOD: (state, payload) => {
    return { ...state, mood: payload }
  },
  REMOVE_MOOD_MOD: (state, payload) => {
    const { mood } = state
    mood.mods[payload] = undefined
    return { ...state, mood }
  },
  ADD_MOOD_MOD: (state, payload) => {
    const { mood } = state
    const mood_mod = payload
    mood.mods[mood_mod.label] = mood_mod
    return { ...state, mood }
  }
}

const reducer = (state = initialState, action) => {
  const handler = cases[action.type]
  return handler ? handler(state, action.payload) : state
}

export default reducer