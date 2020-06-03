import React from 'react'
import { connect } from 'react-redux'

import './style.sass'

import { Avatar, Meter, Box } from 'grommet'
const MoodBar = ({ mood }) => {

  const getMeterColor = value => {
    if (value <= 20)
      return 'red'
    else if (value <= 40)
      return 'orange'
    else if (value <= 60)
      return 'yellow'
    else if (value <= 80)
      return 'lime'
    else
      return 'green'
  }

  const src = './public/images/duck-faces/duck-very-happy.svg'
  return (
    <Box
      className="mood-component"
      width="64px"
      height="64px"
      margin="small" >
      <Meter
        className="mood-value"
        round
        values={[{ value: mood.value, color: getMeterColor(mood.value) }]}
        type="circle"
        size="64px" />
      <Avatar
        className="mood-avatar"
        size="64px"
        src={src} />
    </Box>
  )
}

const mapStateToProps = state => ({
  mood: state.game.mood
})

export default connect(mapStateToProps)(MoodBar)