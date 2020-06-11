import React from 'react'
import { Box, Button, Stack } from 'grommet'
import { connect } from 'react-redux'
import './style.sass'

import Emoji from '@/components/Emoji'

const MoodMod = ({ mod }) => {
  const box = {
    style: {
      width: '2em',
      height: '2em',
      borderRadius: '9999999999px'
    },
    direction: 'row',
    align: 'center',
    justify: 'center',
    className: "neuromorphic-inset",
    // margin: "small"
  }

  return (
    <>
      <Box {...box} >
        <Emoji symbol={mod.emoji} />
      </Box>
    </>
  )
}

// const MoodMods = ({ mods }) => {

//   return (
//     <>

//     </>
//   )
// }

const MoodModsBar = ({ mods }) => {

  const values = Object.values(mods)
  const length = values.length
  return (
    <Box
      wrap={false}
      id="mood-mods-bar"
      direction="row"
      align="start"
      justify="start"
      gap="small"
      pad="small"
      className="compressed-mood-mods-bar"
    >
      <Stack anchor="top-right">
        <MoodMod
          mod={{
            emoji: "💖"
          }}
        />
        <span>2</span>
      </Stack>
      {
        values.map((mod, index) => {
        return <MoodMod
          key={index}
          mod={mod}
        />
      })
      }
    </Box>
  )
}

const mapStateToProps = state => ({
  mods: state.game.mood.mods
})

export default connect(mapStateToProps)(MoodModsBar)