import React, { useState, useEffect } from 'react'
import { Box, Button } from 'grommet'

import './style.sass'

import MoodMenu from '@/components/game/MoodMenu'
import MoodMeter from '@/components/game/MoodMeter'
import MoodModsBar from '@/components/game/MoodModsBar'

import Icon from '@mdi/react'
import { mdiArrowLeft } from '@mdi/js'

const MoodBar = props => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Box
        id="mood-bar"
        className="neuromorphic"
        direction="row"
        align="center"
        justify="start"
        height="4rem"
      >

        <MoodMeter
          open={open}
          dropAlign={{ top: 'bottom', right: 'right' }}
          onClick={() => setOpen(true)}
          dropAlign={{ top: 'bottom', left: 'left' }}
          dropProps={{
            elevation: 'medium',
            // plain: true, 
            plain: false,
            onEsc: () => setOpen(false)
          }}
          dropContent={
            <MoodMenu
              closeButton={<Button
                className="neuromorphic"
                data-sound="out"
                onClick={() => setOpen(false)}
                icon={<Icon path={mdiArrowLeft} size={1} />} />}
              meter={
                <MoodMeter />
              } />
          } />

        <MoodModsBar />
      </Box>

      <Box
        className="neuromorphic"
        direction="row"
        align="center"
        justify="start"
        style={{
          display: open ? 'flex' : 'none'
        }}
      >


      </Box>
    </>
  )
}

export default MoodBar