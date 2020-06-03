import React from 'react'
import { connect } from 'react-redux'

import './style.sass'

import { Avatar, Meter, Box } from 'grommet'
const MoodBar = ({ mood }) => {

  const getMoodColor = value => {
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

  const getMoodLabel = value => {
    if (value <= 20)
      return 'very unhappy'
    else if (value <= 40)
      return 'unhappy'
    else if (value <= 60)
      return 'normal'
    else if (value <= 80)
      return 'happy'
    else
      return 'very happy'
  }

  const src = './public/images/duck-faces/duck-very-happy.svg'
  return (
    <Box
      className="mood-component"
      width="64px"
      height="64px"
      margin="small"
      title={`Duck is ${getMoodLabel(mood.value)}`}
    >
      <Meter
        className="mood-value"
        round
        values={[{ value: mood.value, color: getMoodColor(mood.value) }]}
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