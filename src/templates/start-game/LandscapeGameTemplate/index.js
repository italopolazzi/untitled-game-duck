import React, { useState, useEffect } from 'react'
import { Box, Tabs, Tab, Button, RangeInput, FormField, TextInput } from 'grommet'

import Icon from '@mdi/react'
import { mdiPlus, mdiMinus } from '@mdi/js'

import { connect } from 'react-redux'

import './style.sass'

import PersonalitySelector from '@/components/start-game/PersonalitySelector'

import { updateStartGame as UPDATE_START_GAME } from '@/store/actions/start_game'

const LandscapeGameTemplate = ({ name_initial, personality_initial, updateStartGame }) => {

  const [name, setName] = useState(name_initial)
  const [personality, setPersonality] = useState(personality_initial)

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
        onClick={() => updateStartGame({
          personality,
          name
        })} />


    </Box>
  )
}

const mapStateToProps = state => ({
  name_initial: state.start_game.name,
  personality_initial: state.start_game.personality,
})

const mapDispatchToProps = dispatch => ({
  updateStartGame: updated_state => {
    console.log(updated_state);
    dispatch(UPDATE_START_GAME(updated_state))
    
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LandscapeGameTemplate)