import React, { useState } from 'react'
import { DropButton, Box, Button, Text } from 'grommet'

import Icon from '@mdi/react'
import { mdiDotsVertical, mdiClose, mdiMusic, mdiMusicOff } from '@mdi/js'

import './style.sass'

const OptionsButton = props => {
  const [muted, setMuted] = useState(false)
  const [open, setOpen] = useState(false)

  const unmuteSounds = () => {
    document.querySelectorAll('audio').forEach(elem => {
      elem.muted = false
      setMuted(false)
    })
  }

  const muteSounds = () => {
    document.querySelectorAll('audio').forEach(elem => {
      elem.pause()
      elem.muted = true
      setMuted(true)
    })
  }

  return (
    <DropButton
      id="options-button"
      className="neuromorphic"
      direction="row"
      align="center"
      justify="start"
      open={open}
      icon={<Icon path={mdiDotsVertical} size={1} />}
      onClick={() => setOpen(true)}
      dropContent={
        <Box width={{min: '300px'}} direction="column" align="center" justify="between" pad="medium" gap="medium">
          <Box direction="row" align="center" justify="between" gap="medium" fill="horizontal" >
            <Text weight="normal">Options</Text>
            <Button onClick={() => setOpen(false)} icon={<Icon path={mdiClose} size={1} />} />
          </Box>
          <Box direction="column" align="start" justify="center" gap="medium" fill="horizontal">
            {
              muted
                ? <Button fill="horizontal" onClick={() => unmuteSounds()} icon={<Icon path={mdiMusic} size={1} />} label="Unmute sounds" />
                : <Button fill="horizontal" onClick={() => muteSounds()} icon={<Icon path={mdiMusicOff} size={1} />} label="Mute sounds" />
            }
          </Box>
          <Box direction="row" align="center" justify="center" fill="horizontal">
            <Text weight="bold" size="small">Made with love by X</Text>
          </Box>
        </Box>
      }
    />
  )
}

export default OptionsButton