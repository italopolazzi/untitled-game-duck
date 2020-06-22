import initialState from '@/store/state/start_game'

const cases = {
  SET_NAME: (state, payload) => {
    return { ...state, name: payload }
  },
  SET_PERSONALITY: (state, payload) => {
    return { ...state, personality: payload }
  }
}

const reducer = (state = initialState, action) => {
  const handler = cases[action.type]
  return handler ? handler(state, action.payload) : state
}

export default reducer