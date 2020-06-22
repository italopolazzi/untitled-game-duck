export const setName = name => ({
  type: 'SET_NAME',
  payload: name
})
export const setPersonality = personality => ({
  type: 'SET_PERSONALITY',
  payload: personality
})
export const updateStartGame = ({ name, personality }) => {
  return dispatch => {
    dispatch(setName(name))
    dispatch(setPersonality(personality))
  }
}