import React from 'react'
import { Box } from 'grommet'

import './style.sass'

import MoodMeter from '@/components/game/MoodMeter'

const MoodBar = props => {
  return (
    <Box
      id="mood-bar"
      className="neuromorphic"
      direction="row"
      align="center"
      justify="start"
      height="4rem"
      overflow="hidden"
      fill="horizontal">
      <MoodMeter />
    </Box>
  )
}

export default MoodBar