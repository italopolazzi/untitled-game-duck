
import initialState from '@store/state/game'

import animations from '@/animations'

const changeNeed = (data, current_speed) => {

  const { mods, actions } = data
  const current_action = actions[0]

  // an array that includes 1 mod called "nothing"
  // OR an array with all the mods objects mapped by key
  const needs_mods = !current_action ? [mods.nothing] : current_action.mods.map(key => mods[key])

  const new_data = { ...data }
  needs_mods.forEach(mod => {
    Object.keys(mod).forEach(key => {
      const value = mod[key] * current_speed
      new_data.needs[key].value += value
    })
  })

  return new_data
}

const reducer = (state = initialState, action) => {
  const data = state
  switch (action.type) {
    case 'ADD_ACTION':
      if (data.actions.length < 8) {

        const animation_key = action.payload.type
        const animation = animations[animation_key]
        data.animation = animation ? { type: animation_key, ...animation } : null
        data.actions = [...data.actions, action.payload]
        return { ...data }
      } else {
        return data
      }
    case 'REMOVE_ACTION':
      data.actions = [...data.actions.filter((v, i) => i !== action.payload)]
      return { ...data }
    case 'DECREMENT_NEEDS':
      return { ...changeNeed(data, action.payload) }
  }
  return state
}

export default reducer