import React from 'react'
import { Box } from 'grommet'
import { connect } from 'react-redux'

import './style.sass'

import MoodMod from '@/components/MoodMod/index'

const MoodModsBar = ({ mood }) => {

  return (
    <Box
      
      fill
      wrap={false}
      direction="row"
      align="end"
      justify="start">
      {Object.values(mood.mods).map((mod, index) => mod && <MoodMod key={index} mod={mod} />)}
    </Box>
  )
}

const mapStateToProps = state => ({
  mood: state.game.mood
})

export default connect(mapStateToProps)(MoodModsBar)