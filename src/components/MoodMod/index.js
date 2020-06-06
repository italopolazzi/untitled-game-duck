import React, { useState } from 'react'
import { Box, Text, DropButton } from 'grommet'

import './style.sass'

import Emoji from '@/components/Emoji/index'

const MoodModDescription = ({mod}) => {
  const { emoji, value, label, description, timeout } = mod  
  return (
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
  )
}

const MoodMod = ({ mod }) => {

  const [drop, setDrop] = useState(false)
  return (
    <DropButton
      size="large"
      margin="0.5em"
      dropAlign={{ bottom: true }}
      open={drop}
      dropContent={<MoodModDescription mod={mod} />}
      onMouseOver={() => setDrop(true)}
      onMouseOut={() => setDrop(false)}
      dropProps={{ plain: true, elevation: false }} >
      <Box direction="column"
        align="center"
        justify="center"
        width="1em"
        height="1em" >
        <Emoji symbol={mod.emoji} />
      </Box>
    </DropButton>
  )
}

export default MoodMod