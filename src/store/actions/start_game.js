

import { setName as SET_GAME_NAME, setPersonality as SET_GAME_PERSONALITY } from '@/store/actions/game'


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
export const preAddGameConfig = ({ name, personality }) => {
  return dispatch => {
    dispatch(SET_GAME_NAME(name))
    dispatch(SET_GAME_PERSONALITY(personality))
  }
}