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
