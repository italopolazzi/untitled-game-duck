import React, { useState } from 'react'
import { DropButton, Box, Button, Text } from 'grommet'

import Icon from '@mdi/react'
import { mdiDotsVertical, mdiClose, mdiMusic, mdiMusicOff, mdiContentSave, mdiExitToApp, mdiInformation } from '@mdi/js'

import './style.sass'

import store from '@/store'
import { showInfoLayer as SHOW_INFO_LAYER } from '@/store/actions/start_game'

import { useHistory } from 'react-router-dom'

const OptionsButton = props => {
  const history = useHistory()
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

  const saveGame = () => {
    if (localStorage) {
      // alert("Save is supported")
      const data = JSON.stringify(store.getState().game)
      localStorage.setItem("untitled-game-duck", data)
    } else {
      alert("Save isn't supported")
    }
  }

  const exitToMainMenu = () => {
    if (confirm("Exit to main menu?")) {
      history.push("/")
    }
  }

  const showInfo = () => {
    store.dispatch(SHOW_INFO_LAYER(true))
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
        <Box width={{ min: '300px' }} direction="column" align="center" justify="between" pad="medium" gap="medium">
          <Box direction="row" align="center" justify="between" gap="medium" fill="horizontal" >
            <Text weight="normal">Options</Text>
            <Button onClick={() => setOpen(false)} icon={<Icon path={mdiClose} size={1} />} />
          </Box>
          <Box direction="column" align="start" justify="center" gap="small" fill="horizontal">
            {
              muted
                ? <Button fill="horizontal" onClick={() => unmuteSounds()} icon={<Icon path={mdiMusic} size={1} />} label="Unmute sounds" />
                : <Button fill="horizontal" onClick={() => muteSounds()} icon={<Icon path={mdiMusicOff} size={1} />} label="Mute sounds" />
            }
            <Button fill="horizontal" onClick={() => saveGame()} icon={<Icon path={mdiContentSave} size={1} />} label="Save game" />
            <Button fill="horizontal" onClick={() => exitToMainMenu()} icon={<Icon path={mdiExitToApp} size={1} />} label="Exit to main menu" />
            <Button fill="horizontal" onClick={() => showInfo()} icon={<Icon path={mdiInformation} size={1} />} label="Info" />
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