
import initialState from '@store/state/game'

import animations from '@/animations'

const changeNeed = (state, current_speed) => {

  const { mods, actions } = state
  const current_action = actions[0]

  // an array that includes 1 mod called "nothing"
  // OR an array with all the mods objects mapped by key
  const needs_mods = !current_action ? [mods.nothing] : current_action.mods.map(key => mods[key])



  const new_needs = { ...state.needs }

  needs_mods.forEach(mod => {

    Object.keys(mod).forEach(key => {
      const correction = 0.1
      const value = mod[key] * current_speed * correction
      new_needs[key].value += value
    })
  })


  return new_needs
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ACTION':
      if (state.actions.length < 8) {
        const animation_key = action.payload.type
        const animation = animations[animation_key]
        state.animation = animation ? { type: animation_key, ...animation } : null
        state.actions = [...state.actions, action.payload]
        return { ...state }
      } else {
        return state
      }
    case 'REMOVE_ACTION':
      state.actions = [...state.actions.filter((v, i) => i !== action.payload)]
      return { ...state }
    case 'DECREMENT_NEEDS':
      const new_needs = changeNeed(state, action.payload)
      return { ...state, needs: new_needs }
  }
  return state
}

export default reducer