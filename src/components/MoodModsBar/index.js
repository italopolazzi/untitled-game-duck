import React, { useState } from 'react'
import { Box, Text, Button, DropButton } from 'grommet'
import { connect } from 'react-redux'

import './style.sass'

import Emoji from '@/components/Emoji/index'

const MoodModButton = props => {
  const [drop, setDrop] = useState(false)
  const { emoji, value, label, description, timeout } = props.mood_mod

  return (
    <DropButton
      size="large"
      margin="0.5em"
      dropAlign={{ bottom: true }}
      open={drop}
      onMouseOver={() => setDrop(true)}
      onMouseOut={() => setDrop(false)}
      dropProps={{
        plain: true,
        elevation: false
      }}
      dropContent={
        <Box pad="medium" gap="medium" round background="light-1" border={{ color: 'accent-2', size: "medium" }} >
          <Box direction="row" fill="horizontal" justify="between" align="center">
            <Text weight="bold">{label}</Text>
            <Emoji symbol={emoji} />
          </Box>

          <Text >{description}</Text>
          <Box direction="row" gap="medium" fill="horizontal" align="center" justify="between">
            <Box direction="column" justify="start" align="start">
              <Text >mods</Text>
              <Text weight="bold">{value}</Text>
            </Box>
            <Box direction="column" justify="start" align="start">

              <Text >duration</Text>
              <Text weight="bold">{timeout / 1000}</Text>
            </Box>
          </Box>

        </Box>
      }
    >
      <Box
        direction="column"
        align="center"
        justify="center"
        width="1em"
        height="1em"

      >
        <Emoji symbol={emoji} />

      </Box>
    </DropButton>
  )
}

const MoodModsBar = props => {

  const mood_mods = {
    sad: {
      value: -10,
      timeout: 10000,
      emoji: '😥',
      label: 'sad',
      description: 'Duck is sad'
    },
    happy: {
      value: 10,
      timeout: 10000,
      emoji: '😄',
      label: 'happy',
      description: 'Duck is happy'
    },
    proud: {
      value: 15,
      timeout: 10000,
      emoji: '😊',
      label: 'proud',
      description: 'Duck is proud'
    },
    loved: {
      value: 30,
      timeout: 10000,
      emoji: '🥰',
      label: 'loved',
      description: 'Duck is loved'
    },
    playful: {
      value: 25,
      timeout: 10000,
      emoji: '🤪',
      label: 'playful',
      description: 'Duck is playful'
    },
    upset: {
      value: -25,
      timeout: 10000,
      emoji: '😔',
      label: 'upset',
      description: 'Duck is upset'
    },
    sleepy: {
      value: -50,
      timeout: 10000,
      emoji: '😴',
      label: 'sleepy',
      description: 'Duck is sleepy'
    },
    dirty: {
      value: -60,
      timeout: 10000,
      emoji: '💩',
      label: 'dirty',
      description: 'Duck is dirty'
    }
  }

  return (
    <Box
      fill
      wrap={false}
      direction="row"
      align="end"
      justify="start">
      {Object.values(mood_mods).map((mood_mod, index) => <MoodModButton key={index} mood_mod={mood_mod} />)}
    </Box>
  )
}

export default connect()(MoodModsBar)