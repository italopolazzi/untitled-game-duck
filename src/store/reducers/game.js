
import initialState from '@store/state/game'

const cases = {
  ADD_ACTION: (state, action) => {
    if (state.actions.length < 6) {
      state.actions = [...state.actions, { ...action.payload }]
      return { ...state }
    } else {
      return state
    }
  },
  REMOVE_ACTION: (state, action) => {
    state.actions = [...state.actions.filter((v, i) => i !== action.payload)]
    return { ...state }
  },
  SET_ACTIONS: (state, action) => {
    return { ...state, actions: [...action.payload] }
  },
  SET_NEEDS: (state, action) => {
    return { ...state, needs: {...action.payload} }
  },
  SET_CURRENT_SPEED: (state, action) => {
    return { ...state, current_speed: action.payload }
  }
}

const reducer = (state = initialState, action) => {
  const handler = cases[action.type]
  return handler ? handler(state, action) : state
}

export default reducer