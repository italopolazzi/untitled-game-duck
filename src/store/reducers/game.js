
import initialState from '@store/state/game'

import animations from '@/animations'



const updateGameState = (state) => {

  const { mods, actions, current_speed } = state
  const current_action = actions[0]

  // an array that includes 1 mod called "nothing"
  // OR an array with all the mods objects mapped by key
  let needs_mods = null
  let new_needs = { ...state.needs }
  let new_animation = null

  if (!current_action) {
    needs_mods = [mods.nothing]
  } else {
    needs_mods = current_action.mods.map(key => mods[key])

    const animation_key = current_action.type
    const current_animation = animations[animation_key]
    new_animation = { type: animation_key, ...current_animation }


  }

  needs_mods.forEach(mod => {
    Object.keys(mod).forEach(key => {
      const correction = 0.01
      const value = mod[key] * current_speed * correction
      new_needs[key].value += value
    })
  })


  // update expired actions here
  const new_actions = [...state.actions]

  if (state.current_animation) {
    if (new_animation && new_animation.type === state.current_animation.type) {
      return { needs: new_needs, actions: new_actions }
    }
  }
  return { needs: new_needs, actions: new_actions, current_animation: new_animation }


}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ACTION':
      if (state.actions.length < 6) {
        state.actions = [...state.actions, action.payload]
        return { ...state }
      } else {
        return state
      }
    case 'REMOVE_ACTION':
      state.actions = [...state.actions.filter((v, i) => i !== action.payload)]
      return { ...state }
    case 'UPDATE_GAME':
      const new_parts = updateGameState(state)
      return { ...state, ...new_parts }
    case 'SET_CURRENT_SPEED':
      return { ...state, current_speed: action.payload }
  }
  return state
}

export default reducer