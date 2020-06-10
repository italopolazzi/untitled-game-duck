import {
  MAX_NEED_VALUE,
  MIN_NEED_VALUE,
  CURRENT_ACTION_INDEX,
  ACTION_MODS,
  MOOD_MODS,
  ACTION_MOD_PERCENT,
  MOOD_MOD_DEFAULT_TIMEOUT
} from '@/data/constants.js'

import Store from '@/store'

export const removeGlobalMessage = (index = 0) => {
  return {
    type: 'REMOVE_GLOBAL_MESSAGE',
    payload: index
  }
}

export const addGlobalMessage = message => {
  return {
    type: 'ADD_GLOBAL_MESSAGE',
    payload: message
  }
}

export const addAction = command => {
  return dispatch => {
    if (Store.getState().game.actions.length < 6) {
      dispatch({
        type: 'ADD_ACTION',
        payload: {
          ...command, // {type, icon, action_mods, duration}
          action_mods: command.action_mods.map(key => ACTION_MODS[key]),
          // TEMP:  command.action_mods[0]
          fills_need: command.action_mods[0],
          timeout: null
        }
      })
    } else {
      const timeout = setTimeout(() => {
        console.log("Removing");
        
        dispatch(removeGlobalMessage(0))
        clearTimeout(timeout)
      }, 3000);
      dispatch(addGlobalMessage("Actions stack is full!"))
    }
  }

}

export const removeAction = action_index => ({
  type: 'REMOVE_ACTION',
  payload: action_index
})

export const setCurrentSpeed = current_speed => ({
  type: 'SET_CURRENT_SPEED',
  payload: current_speed
})

export const setActions = actions => ({
  type: 'SET_ACTIONS',
  payload: actions
})

export const setNeeds = needs => ({
  type: 'SET_NEEDS',
  payload: needs
})

export const setMood = mood => ({
  type: 'SET_MOOD',
  payload: mood
})

export const removeMoodMod = label => ({
  type: 'REMOVE_MOOD_MOD',
  payload: label
})

export const addMoodMod = mood_mod => ({
  type: 'ADD_MOOD_MOD',
  payload: mood_mod
})

export const activateCurrentAction = action => ({
  type: 'ACTIVATE_CURRENT_ACTION',
  payload: action
})

const getCurrentAction = (state, dispatch) => {
  const current_action = state.actions[CURRENT_ACTION_INDEX]
  // if have a index 0 action and the timeout isn't set
  if (current_action) {
    if (!current_action.timeout) {
      const timeout = setTimeout(() => {
        dispatch(removeAction(CURRENT_ACTION_INDEX))
        clearTimeout(timeout)
      }, current_action.duration);
      current_action.timeout = timeout
      dispatch(activateCurrentAction(current_action))
    }
    return current_action
  } else {
    // an action to handle 'doing nothing'
    return {
      action_mods: [ACTION_MODS.doing_nothing]
    }
  }
}

const getMoodMods = border_keys => {
  const { fullfied, empty } = border_keys

  const fullfied_mods_keys = fullfied.map(need_key => {
    switch (need_key) {
      case 'fun':
        return "playful"
      case 'hunger':
        return "satiated"
      case 'social':
        return "loved"
      case 'hygiene':
        return "shining"
    }
  })
  const empty_mods_keys = empty.map(need_key => {
    switch (need_key) {
      case 'baddler':
        return "bursting"
      case 'fun':
        return "upset"
      case 'hunger':
        return "hungry"
      case 'social':
        return "sad"
      case 'hygiene':
        return "dirty"
      case 'energy':
        return "sleepy"
    }
  })

  const mood_mods_keys = [...empty_mods_keys, ...fullfied_mods_keys]
    .filter(v => typeof v === "string")

  const mood_mods = mood_mods_keys.map(key => MOOD_MODS[key])
  return mood_mods
}

const updateNeeds = (state, action) => {
  const update = (current_speed, needs) => {
    const getChangeValueWithCorrection = change_value => {
      return change_value * ACTION_MOD_PERCENT * current_speed
    }

    const { action_mods } = action
    action_mods.forEach(action_mod => {
      const { changes } = action_mod
      Object.keys(changes).forEach(key => {
        needs[key].value += getChangeValueWithCorrection(changes[key])
      })
    })
    return needs
  }

  const { needs, current_speed } = state
  const updated_needs = update(current_speed, needs)
  return updated_needs;
}





const updateMood = (mood_mods, mood, dispatch) => {
  const calcMoodValueBasedOnMoodMods = mood_mods => {
    const accumulated_value = Object.values(mood_mods).reduce((acc, curr) => {
      if (curr) return acc += curr.value
      else return 0
    }, 0)
    return mood.value + accumulated_value
  }

  const updateMoodMods = mods => {

    const includeMoodMod = (acc, curr) => {
      const { label } = curr
      if (!acc[label]) {
        const timeout = setTimeout(() => {
          dispatch(removeMoodMod(label))
          clearTimeout(timeout)
        }, curr.timeout || MOOD_MOD_DEFAULT_TIMEOUT);
        acc[label] = curr
      }
      return acc
    }

    return mood_mods.reduce((acc, curr) => includeMoodMod(acc, curr), mood.mods)
  }

  const updated_mood_mods = updateMoodMods(mood.mods)
  const new_mood_value = calcMoodValueBasedOnMoodMods(updated_mood_mods)
  const updated_mood = { ...mood, mods: updated_mood_mods, value: new_mood_value }
  return updated_mood
}


const getBorderNeedsKeys = needs => {
  return Object.keys(needs)
    .reduce((acc, need_key) => {
      if (needs[need_key].value >= MAX_NEED_VALUE - 5) acc.fullfied.push(need_key)
      if (needs[need_key].value <= MIN_NEED_VALUE + 5) acc.empty.push(need_key)
      return acc
    }, { fullfied: [], empty: [] })
}

const removeCurrentActionIfFullfied = (current_action, border_keys, dispatch) => {
  const { fills_need } = current_action
  if (border_keys.fullfied.includes(fills_need)) {
    dispatch(removeAction(CURRENT_ACTION_INDEX))
  }
}

export const updateGame = state => {
  return dispatch => {

    const current_action = getCurrentAction(state, dispatch)
    const updated_needs = updateNeeds(state, current_action)

    const border_keys = getBorderNeedsKeys(updated_needs)
    removeCurrentActionIfFullfied(current_action, border_keys, dispatch)

    const mood_mods = getMoodMods(border_keys)
    const updated_mood = updateMood(mood_mods, state.mood, dispatch)

    dispatch(setNeeds(updated_needs))
    dispatch(setMood(updated_mood))
  }
}