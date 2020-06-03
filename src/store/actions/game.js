export const addAction = command => ({
  type: 'ADD_ACTION',
  payload: command
})

export const removeAction = action_index => ({
  type: 'REMOVE_ACTION',
  payload: action_index
})

export const changeAnimation = animation => ({
  type: 'CHANGE_ANIMATION',
  payload: animation
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

export const setCurrentAnimation = current_animation => ({
  type: 'SET_CURRENT_ANIMATION',
  payload: current_animation
})

export const updateGame = updated_state_values => {
  const { actions, needs } = updated_state_values
  return dispatch => {
    dispatch(setNeeds({ ...needs }))
    dispatch(setActions([...actions]))
  }
}