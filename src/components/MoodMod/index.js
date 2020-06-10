import React, { useState } from 'react'
import { Box, Text, Button } from 'grommet'

import './style.sass'

import Emoji from '@/components/Emoji/index'

const MoodMod = ({ mod, button }) => {

  return (
    <Button {...button} >
      <Box direction="column"
        align="center"
        justify="center"
      >
        <Emoji symbol={mod.emoji} />
      </Box>
    </Button >
  )
}

export default MoodMod