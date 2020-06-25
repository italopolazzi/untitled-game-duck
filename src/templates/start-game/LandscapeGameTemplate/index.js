import React, { useState, useEffect } from 'react'
import { Box, Text, Button, FormField, TextInput } from 'grommet'
import { useHistory } from "react-router-dom"


import { connect } from 'react-redux'

import './style.sass'

import PersonalitySelector from '@/components/start-game/PersonalitySelector'

import { updateStartGame as UPDATE_START_GAME, preAddGameConfig as PRE_ADD_START_GAME_CONFIG } from '@/store/actions/start_game'

const LandscapeGameTemplate = ({ name_initial, personality_initial, updateStartGame, preAddGameConfig }) => {

  const [name, setName] = useState(name_initial)
  const [personality, setPersonality] = useState(personality_initial)
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  useEffect(() => {
    updateStartGame({
      personality,
      name
    })
  }, [personality, name])

  const startGame = () => {
    setLoading(true)

    const timeout = setTimeout(() => {
      setLoading(false)
      preAddGameConfig({
        personality,
        name
      })
      history.push("/game")
      clearTimeout(timeout)
    }, 5000);
  }

  return (
    <Box
      id="landscape-game-template"
      fill
      direction="column" >
      <FormField label="Name">
        <TextInput value={name} onChange={e => setName(e.target.value)} />
      </FormField>
      <FormField label="Personality selector">
        <PersonalitySelector
          callback={v => setPersonality(v)}
          personality={personality}
        />
      </FormField>
      <Button
        label="Set data"
        onClick={async () => startGame()} />
      {loading ? <Text weight="bold">Loading...</Text> : null}
    </Box>
  )
}

const mapStateToProps = state => ({
  name_initial: state.start_game.name,
  personality_initial: state.start_game.personality,
})

const mapDispatchToProps = dispatch => ({
  updateStartGame: updated_state => {
    dispatch(UPDATE_START_GAME(updated_state))
  },
  preAddGameConfig: config => dispatch(PRE_ADD_START_GAME_CONFIG(config))
})

export default connect(mapStateToProps, mapDispatchToProps)(LandscapeGameTemplate)