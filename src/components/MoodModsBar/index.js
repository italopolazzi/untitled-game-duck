import React from 'react'
import { Box } from 'grommet'
import { connect } from 'react-redux'

import './style.sass'

import MoodMod from '@/components/MoodMod/index'
import LifesCountMini from '@/components/LifesCountMini/index'


const MoodModsBar = ({ mood, children }) => {

  const button = {
    style: {
      width: '2rem',
      height: '2rem'
    },
    direction: 'row',
    align: 'center',
    justify: 'center',
    className: "neuromorphic-inset"
  }

  return (
    <Box
      fill
      wrap={false}
      direction="row"
      align="end"
      justify="start">
      <LifesCountMini button={button} />
      {Object.values(mood.mods).map((mod, index) => {
        return (
          mod && <MoodMod
            key={index}
            button={button}
            mod={mod} />
        )
      })}
    </Box>
  )
}

const mapStateToProps = state => ({
  mood: state.game.mood
})

export default connect(mapStateToProps)(MoodModsBar)