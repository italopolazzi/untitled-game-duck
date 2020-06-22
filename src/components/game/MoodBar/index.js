import React, { useState, useEffect } from 'react'
import { Box, DropButton } from 'grommet'

import './style.sass'

import MoodMenu from '@/components/game/MoodMenu'
import MoodMeter from '@/components/game/MoodMeter'
import MoodModsBar from '@/components/game/MoodModsBar'

const MoodBar = props => {
  const [open, setOpen] = useState(true)

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
          dropProps={{ 
            elevation: false, 
            // plain: true, 
            plain: false, 
            onEsc: () => setOpen(false)
          }}
          dropContent={
            <MoodMenu meter={
              <MoodMeter onClick={() => setOpen(false)} />
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